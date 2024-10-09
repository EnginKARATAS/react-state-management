import { createSlice } from "@reduxjs/toolkit";
import { pos, getTop } from "./cardPositioningUtils.js";
import { createRandomCard } from "./cardService.js";



const initialState: InitialState = {
  hand: {
    playerCards: [],
    enemyCards: [],
  },
  singleCard: null,
  boardCards: [],
};

export const handSlice = createSlice({
  name: "hand",
  initialState,
  reducers: {
    enemyDrawCard: (state: InitialState) => {
      const cardsLength = state.hand.enemyCards.length;
      if (cardsLength < 10) {
        state.hand.enemyCards.push(createRandomCard());
        state.hand.enemyCards = state.hand.enemyCards.map((card, i) => {
          const degCel = 8;

          if (cardsLength === 1)
            return {
              ...card,
              cardPosition: { x: pos(cardsLength, i), y: 0, offset: 0, top: 0 },
              deg: 0,
            };
          return {
            ...card,
            cardPosition: {
              x: pos(cardsLength, i),
              y: 0,
              offset: 0,
              top: getTop(cardsLength),
            },
            deg: (-cardsLength * degCel) / 2 + i * degCel,
          };
        });
      }
    },
    drawCard: (state: InitialState) => {
      const cardsLength = state.hand.playerCards.length;
      if (cardsLength < 10) {
        state.hand.playerCards.push(createRandomCard());
        state.hand.playerCards = state.hand.playerCards.map((card, i) => {
          const degCel = 8;

          if (cardsLength === 1)
            return {
              ...card,
              cardPosition: { x: pos(cardsLength, i), y: 0, offset: 0, top: 0 },
              deg: 0,
            };
          return {
            ...card,
            cardPosition: {
              x: pos(cardsLength, i),
              y: 0,
              offset: 0,
              top: getTop(cardsLength),
            },
            deg: (-cardsLength * degCel) / 2 + i * degCel,
          };
        });
      }
    },
    showCard: (state: InitialState, action: { payload: { cardId: string } }) => {
      const card = state.hand.playerCards.find(
        (card) => card.cardId === action.payload.cardId
      );
      if (card) {
        card.cardPosition.y = 300;
        card.cardPosition.x = 300;
        card.cardSelected = true;
      }
    },
    hoverSingleCard: (state: InitialState, action: { payload: Card | null }) => {
      state.singleCard = action.payload;
    },

    addCardToBoard: (state: InitialState, action: { payload: Card }) => {
      if (state.boardCards.length < 7) {
        state.boardCards.push(action.payload);
        state.hand.playerCards.splice(state.hand.playerCards.indexOf(action.payload, 1));
      }
    },
  },
});

export const { drawCard, showCard, hoverSingleCard, addCardToBoard } =
  handSlice.actions;
export default handSlice.reducer;
