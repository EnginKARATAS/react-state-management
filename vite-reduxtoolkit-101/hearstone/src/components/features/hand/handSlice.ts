import { createSlice } from "@reduxjs/toolkit";
import { pos, getTop } from "./cardPositioningUtils.js";
import { pullRandomCard, getCardBaseLenght } from "./cardService.ts";

const initialState: InitialState = {
  hand: {
    playerCards: [],
    enemyCards: [],
  },
  board: {
    playerCards: [],
    enemyCards: [],
  },
  cardBaseCount: {
    enemy: getCardBaseLenght({player: "enemy"}),
    player: getCardBaseLenght({player: "player"}),
  },
  singleCard: null,

  profile: {
    player: {
      health: 30,
      armor: 0,
    },
    enemy: {
      health: 30,
      armor: 0,
    },
  },
};
 
export const handSlice = createSlice({
  name: "hand",
  initialState,
  reducers: {
    syncCardBaseLenght: (state: InitialState) => {
      state.cardBaseCount.player = getCardBaseLenght({player: "player"});
      state.cardBaseCount.enemy = getCardBaseLenght({player: "enemy"});
    },
    addHealth: (state: InitialState, action: { payload: { value: number, player: "player" | "enemy" }}) => {
      console.log("action.payload", action.payload);
      const profile = action.payload.player === "player" ? state.profile.player : state.profile.enemy;
      profile.health += action.payload.value;
      if (profile.health <= 0) {
        //TODO: game over screen
        profile.health = 0;
      }
    },
    addArmor: (state: InitialState, action: { payload: { value: number, player: "player" | "enemy" }}) => {
      const profile = action.payload.player === "player" ? state.profile.player : state.profile.enemy;
      profile.armor += action.payload.value;
    },
    drawCard: (
      state: InitialState,
      action: { payload: { isEnemy: boolean } }
    ) => {
      const cardState = action.payload.isEnemy
        ? state.hand.enemyCards
        : state.hand.playerCards;
      const randomCard = action.payload.isEnemy
        ? pullRandomCard({ isEnemy: true })
        : pullRandomCard({ isEnemy: false });

      if (cardState.length < 10 && randomCard) {
        if (action.payload.isEnemy && randomCard) {
          state.hand.enemyCards.push(randomCard);
          refreshEnemyCards(state, cardState.length);
        } else {
          state.hand.playerCards.push(randomCard);
          refreshPlayerCards(state, cardState.length);
        }
      }
    },
    showCard: (
      state: InitialState,
      action: { payload: { cardId: number } }
    ) => {
      const card = state.hand.playerCards.find(
        (card) => card.cardId === action.payload.cardId
      );
      if (card) {
        card.cardPosition.y = 300;
        card.cardPosition.x = 300;
      }
    },
    hoverSingleCard: (
      state: InitialState,
      action: { payload: Card | null }
    ) => {
      state.singleCard = action.payload;
    },
    closeSingleCard: (state: InitialState) => {
      state.singleCard = null;
    },
    addCardToBoard: (
      state: InitialState,
      action: { payload: Card; player: "player" | "enemy" }
    ) => {
      if (state.board.playerCards.length < 7) {
        state.board.playerCards.push(action.payload);
        const cardIndex = state.hand.playerCards.findIndex(
          (card) => card.cardId === action.payload.cardId
        );
        state.hand.playerCards.splice(cardIndex, 1);
        refreshPlayerCards(state, state.hand.playerCards.length);
        refreshBoardCardPlayer(state, state.board.playerCards.length);
      }
      if (state.board.enemyCards.length < 7 && action.player === "enemy") {
        state.board.enemyCards.push(action.payload);
        const cardIndex = state.hand.enemyCards.findIndex(
          (card) => card.cardId === action.payload.cardId
        );
        state.hand.enemyCards.splice(cardIndex, 1);
        refreshEnemyCards(state, state.hand.enemyCards.length);
        refreshBoardCardEnemy(state, state.board.enemyCards.length);
      }
    },
    playCardToBoard: (
      state: InitialState,
      action: { payload: { isEnemy: boolean } }
    ) => {
      if (action.payload.isEnemy && state.hand.enemyCards.length > 0) {
        const randomCard = Math.floor(
          Math.random() * state.hand.enemyCards.length
        );
        state.board.enemyCards.push(state.hand.enemyCards[randomCard]);
        state.hand.enemyCards.splice(randomCard, 1);
        refreshEnemyCards(state, state.hand.enemyCards.length);
        refreshBoardCardEnemy(state, state.board.enemyCards.length);
      }
    },
    closeCard: (state: InitialState, action: { payload: Card | null }) => {
      state.singleCard = null;
    },
  },
});

const refreshBoardCardEnemy = (state: InitialState, cardsLength: number) => {
  state.board.enemyCards = state.board.enemyCards.map((card, i) => {
    return {
      ...card,
      cardPosition: {
        x: -cardsLength * 49,
        y: 0,
        offset: 555,
        size: 150,
        top: getTop(cardsLength),
      },
    };
  });
};

const refreshBoardCardPlayer = (state: InitialState, cardsLength: number) => {
  state.board.playerCards = state.board.playerCards.map((card, i) => {
    return {
      ...card,
      cardPosition: {
        x: cardsLength * 49,
        y: 0,
        offset: 555,
        size: 150,
        top: getTop(cardsLength),
      },
    };
  });
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
};
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
};

export const {
  drawCard,
  showCard,
  hoverSingleCard,
  addCardToBoard,
  playCardToBoard,
  closeCard,
  addHealth,
  addArmor, 
  syncCardBaseLenght,
  closeSingleCard,
  clickBoardCard
} = handSlice.actions;
export default handSlice.reducer;
