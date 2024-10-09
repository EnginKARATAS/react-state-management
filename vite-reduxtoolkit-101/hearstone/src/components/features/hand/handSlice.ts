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

const refreshEnemyCards = (state: InitialState, cardsLength: number) => {
  state.hand.enemyCards = state.hand.enemyCards.map((card, i) => {
    const degCel = 8;
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
const refreshPlayerCards = (state: InitialState, cardsLength: number) => {
  state.hand.playerCards = state.hand.playerCards.map((card, i) => {
    const degCel = 8;
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
export const handSlice = createSlice({
  name: "hand",
  initialState,
  reducers: {
   
    drawCard: (state: InitialState, action: { payload: { isEnemy: boolean } }) => {
      const cardsLength = action.payload.isEnemy 
        ? state.hand.enemyCards.length 
        : state.hand.playerCards.length;

      if (cardsLength < 10) {
        const card = createRandomCard();
        if (action.payload.isEnemy) {
          state.hand.enemyCards.push(card);
          refreshEnemyCards(state, cardsLength) 
        } else {
          state.hand.playerCards.push(card);
          refreshPlayerCards(state, cardsLength)
        }
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
        console.log("action.payload", action.payload)
        const cardIndex = state.hand.playerCards.findIndex(card => card.cardId === action.payload.cardId)
        state.hand.playerCards.splice(cardIndex, 1);
        refreshPlayerCards(state, state.hand.playerCards.length)
      }
    },
  },
});

export const { drawCard, showCard, hoverSingleCard, addCardToBoard } =
  handSlice.actions;
export default handSlice.reducer;
