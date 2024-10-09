import { createSlice } from "@reduxjs/toolkit";
import { pos, getTop } from "./cardPositioningUtils.js";
import { createRandomCard } from "./cardService.ts";



const initialState: InitialState = {
  hand: {
    playerCards: [],
    enemyCards: [],
  },
  board: {
    playerCards: [],
    enemyCards: [],
  },
  singleCard: null,
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
        size: 150,
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
        size: 150,
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
        const card = action.payload.isEnemy 
          ? createRandomCard({isEnemy: true}) 
          : createRandomCard({isEnemy: false});

        if (action.payload.isEnemy) {
          state.hand.enemyCards.push(card);
          refreshEnemyCards(state, cardsLength) 
        } else {
          state.hand.playerCards.push(card);
          refreshPlayerCards(state, cardsLength)
        }
      }
    },
    showCard: (state: InitialState, action: { payload: { cardId: number } }) => {
      const card = state.hand.playerCards.find(
        (card) => card.cardId === action.payload.cardId
      );
      if (card) {
        card.cardPosition.y = 300;
        card.cardPosition.x = 300;
      }
    },
    hoverSingleCard: (state: InitialState, action: { payload: Card | null }) => {
      state.singleCard = action.payload;
    },

    addCardToBoard: (state: InitialState, action: { payload: Card }) => {
      if (state.board.playerCards.length < 7) {
        state.board.playerCards.push(action.payload);
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
