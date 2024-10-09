import { createSlice } from "@reduxjs/toolkit";
import { pos, getTop } from "./cardPositioningUtils";
import { createRandomCard } from "./cardService";
const initialState = {
  cards: [],
  singleCard: null,
  boardCards: [], // Add this line to store board cards
};

export const handSlice = createSlice({
  name: "hand",
  initialState,
  reducers: {
    drawCard: (state, action) => {
      const cardsLenght = state.cards.length;
      if (cardsLenght < 10) {
        state.cards.push(createRandomCard());
        state.cards = state.cards.map((card, i) => {
          const degCel = 8;

          if (cardsLenght === 1)
            return {
              ...card,
              cardPosition: { x: pos(cardsLenght, i), y: 0, offset: 0, top: 0 },
              deg: 0,
            };
          return {
            ...card,
            cardPosition: {
              x: pos(cardsLenght, i),
              y: 0,
              offset: 0,
              top: getTop(cardsLenght),
            },
            deg: (-cardsLenght * degCel) / 2 + i * degCel,
          };
        });
      }
    },
    showCard: (state, action) => {
      const card = state.cards.find(
        (card) => card.cardId === action.payload.cardId
      );
      card.cardPosition.y = 300;
      card.cardPosition.x = 300;
      card.cardPosition.size = 150;
      card.cardSelected = true;
    },
    hoverSingleCard: (state, action) => {
      state.singleCard = action.payload;
    },

    addCardToBoard: (state, action) => {
      if (state.boardCards.length < 7) {
        state.boardCards.push(action.payload);
        state.cards.splice(state.cards.indexOf(action.payload, 1));
      }
    },
  },
});

export const { drawCard, showCard, hoverSingleCard, addCardToBoard } =
  handSlice.actions;
export default handSlice.reducer;
