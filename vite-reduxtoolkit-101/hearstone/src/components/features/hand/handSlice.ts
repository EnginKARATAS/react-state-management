import { createSlice } from "@reduxjs/toolkit";
import { pos, getTop } from "./cardPositioningUtils.js";
import { pullRandomCard, getCardBaseLenght } from "./cardService.ts";
import { scenarioSlice } from "../scenario/scenarioSlice.ts";
const borderColorCode: string[] = [
  "blue",
  "red",
  "green",
  "yellow",
  "purple",
  "orange",
  "white",
  "black",
  "gray",
];

const isCard_CachePlayable = (state: InitialState, clickedCard: Card | any) => {
  //loking for cache of current move
  let isPlayable = true;
  state.cardCache.forEach((moveCards, index) => {
    if (
      index <= state.moveCount &&
      (moveCards.clientCard?.cardId === clickedCard.cardId ||
        moveCards.enemyCard?.cardId === clickedCard.cardId)
    ) {
      isPlayable = false;
    }
  });
  return isPlayable;
};

const isPlayerPendingPair = (state: InitialState, clickedCard: Card) => {
  return state.cardCache[state.moveCount]?.clientCard;
};

const isPlayerCacheBlank = (state: InitialState) => {
  return state.cardCache[state.moveCount]?.clientCard === null;
};

const getBorderColor = (state: InitialState) => {
  return borderColorCode[state.moveCount];
};
const initialState: InitialState = {
  hand: {
    player: [],
    enemy: [],
  },
  board: {
    player: [],
    enemy: [],
  },
  cardBaseCount: {
    enemy: getCardBaseLenght({ player: "enemy" }),
    player: getCardBaseLenght({ player: "player" }),
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

  cardCache: [{clientCard: null, enemyCard: null}],
  moveCount: 0,
};

export const handSlice = createSlice({
  name: "hand",
  initialState,
  reducers: {
    clickBoardCard: (
      state: InitialState,
      action: { payload: { clickedCard: Card | any } }
    ) => {
      const cardOwner =
        action.payload.clickedCard.cardOwner === "player" ? "player" : "enemy";
      const clickedCard = state.board[cardOwner].find(
        (card) => card.cardId === action.payload.clickedCard.cardId
      );
       if (isCard_CachePlayable(state, clickedCard)) {
        if (clickedCard && clickedCard.cardOwner === "player") {
          //clear cache
          if(isPlayerCacheBlank(state)) {
            clickedCard.borderColor = getBorderColor(state);
            clickedCard.isSelected = true;
            state.cardCache[state.moveCount].clientCard = clickedCard;
          }
          else{
            state.cardCache[state.moveCount].clientCard!.borderColor = "";
            state.cardCache[state.moveCount].clientCard!.isSelected = false;
            const boardCard = state.board.player.find(card => card.cardId === state.cardCache[state.moveCount].clientCard?.cardId)
            if(boardCard){
              boardCard.borderColor = "";
              boardCard.isSelected = false;
            }
            state.cardCache[state.moveCount].clientCard = null;
            state.cardCache[state.moveCount].enemyCard = null;
            clickedCard.borderColor = getBorderColor(state);
            clickedCard.isSelected = true;
            state.cardCache[state.moveCount].clientCard = clickedCard;
          }
        } else if (clickedCard && clickedCard.cardOwner === "enemy") {
          if (isPlayerPendingPair(state, clickedCard)) {
            clickedCard.borderColor = getBorderColor(state);
            clickedCard.isSelected = true
            state.cardCache[state.moveCount].enemyCard = clickedCard;
            state.moveCount++;
            state.cardCache[state.moveCount] = {clientCard: null, enemyCard: null}
          }
        }
      }
    },
    syncCardBaseLenght: (state: InitialState) => {
      state.cardBaseCount.player = getCardBaseLenght({ player: "player" });
      state.cardBaseCount.enemy = getCardBaseLenght({ player: "enemy" });
    },
    addHealth: (
      state: InitialState,
      action: { payload: { value: number; player: "player" | "enemy" } }
    ) => {
      const profile =
        action.payload.player === "player"
          ? state.profile.player
          : state.profile.enemy;
      profile.health += action.payload.value;
      if (profile.health <= 0) {
        //TODO: game over screen
        profile.health = 0;
      }
    },
    addArmor: (
      state: InitialState,
      action: { payload: { value: number; player: "player" | "enemy" } }
    ) => {
      const profile =
        action.payload.player === "player"
          ? state.profile.player
          : state.profile.enemy;
      profile.armor += action.payload.value;
    },
    drawCard: (
      state: InitialState,
      action: { payload: { isEnemy: boolean } }
    ) => {
      const cardState = action.payload.isEnemy
        ? state.hand.enemy
        : state.hand.player;
      const randomCard = action.payload.isEnemy
        ? pullRandomCard({ isEnemy: true })
        : pullRandomCard({ isEnemy: false });

      if (cardState.length < 10 && randomCard) {
        if (action.payload.isEnemy && randomCard) {
          state.hand.enemy.push(randomCard);
          y(state, cardState.length);
        } else {
          state.hand.player.push(randomCard);
          x(state, cardState.length);
        }
      }
    },
    showCard: (
      state: InitialState,
      action: { payload: { cardId: number } }
    ) => {
      const card = state.hand.player.find(
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
      if (state.board.player.length < 7) {
        state.board.player.push(action.payload);
        const cardIndex = state.hand.player.findIndex(
          (card) => card.cardId === action.payload.cardId
        );
        state.hand.player.splice(cardIndex, 1);
        x(state, state.hand.player.length);
        refreshBoardCardPlayer(state, state.board.player.length);
      }
      if (state.board.enemy.length < 7 && action.player === "enemy") {
        state.board.enemy.push(action.payload);
        const cardIndex = state.hand.enemy.findIndex(
          (card) => card.cardId === action.payload.cardId
        );
        state.hand.enemy.splice(cardIndex, 1);
        y(state, state.hand.enemy.length);
        refreshBoardCardEnemy(state, state.board.enemy.length);
      }
    },
    playCardToBoard: (
      state: InitialState,
      action: { payload: { isEnemy: boolean } }
    ) => {
      if (action.payload.isEnemy && state.hand.enemy.length > 0) {
        const randomCard = Math.floor(Math.random() * state.hand.enemy.length);
        state.board.enemy.push(state.hand.enemy[randomCard]);
        state.hand.enemy.splice(randomCard, 1);
        y(state, state.hand.enemy.length);
        refreshBoardCardEnemy(state, state.board.enemy.length);
      }
    },
    closeCard: (state: InitialState, action: { payload: Card | null }) => {
      state.singleCard = null;
    },
  },
});

const refreshBoardCardEnemy = (state: InitialState, cardsLength: number) => {
  state.board.enemy = state.board.enemy.map((card, i) => {
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
  state.board.player = state.board.player.map((card, i) => {
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

const y = (state: InitialState, cardsLength: number) => {
  state.hand.enemy = state.hand.enemy.map((card, i) => {
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
const x = (state: InitialState, cardsLength: number) => {
  state.hand.player = state.hand.player.map((card, i) => {
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
  clickBoardCard,
} = handSlice.actions;
export default handSlice.reducer;
