import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const borderColorCode: string[] = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "white",
  "black",
  "gray",
];

const initialState: ScenarioInitialState = {
  borderColor: "",
  cacheSelectedCard: null,
  move: [],
};

export const fetchData = createAsyncThunk(
    'hand/test',
    async (arg, { getState }) => {
      const count = getState().counter.value; // Accessing counterSlice state
      const response = await fetch(`/api/data?count=${count}`);
      return response.json();
    }
  );
export const scenarioSlice = createSlice({
  name: "scenario",
  initialState,
  reducers: {
    getBorderColor: (state, action) => {
      state.borderColor = borderColorCode[action.payload];

    },
    clickBoardCard: (state, action) => {
        const basestate = fetchData();
        console.log(basestate); 
        const cardOwner =
        action.payload.cardOwner === "player" ? "player" : "enemy";
      const clickedCard = basestate.board[cardOwner].find(
        (card) => card.cardId === action.payload.cardId
      );
      console.log("ilk defa tıklandığında ve renk kodu yoksa");
      if (!basestate.cacheSelectedCard && !clickedCard?.borderColor) {
        console.log("kart rakip mi");
        if (clickedCard.cardOwner === "enemy") {
          this.cacheSelectedCard = null;
        } else {
          this.cacheSelectedCard = clickedCard;
          clickedCard.borderColor = this.getBorderColor();
        }
      } else {
        console.log("ilk defa tıklanmadı, renk kodu var");
        if (clickedCard.cardOwner !== "enemy") {
          console.log("düşman kartı değil");
          console.log(this.cacheSelectedCard);
          debugger;
          this.cacheSelectedCard!.isSelected = false;
          this.cacheSelectedCard!.borderColor = null;
          this.cacheSelectedCard = null;
        } else {
          clickedCard.borderColor = this.getBorderColor();
          clickedCard.isSelected = true;
        }
      }
    },
  },
});

export const { getBorderColor, clickBoardCard } = scenarioSlice.actions;
export default scenarioSlice.reducer;
