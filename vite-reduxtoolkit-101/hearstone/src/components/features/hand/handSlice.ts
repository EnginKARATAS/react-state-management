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
      (moveCards.player?.cardId === clickedCard.cardId ||
        moveCards.enemy?.cardId === clickedCard.cardId)
    ) {
      isPlayable = false;
    }
  });
  return isPlayable;
};

const isPlayerPendingPair = (state: InitialState, clickedCard: Card, actionMaker: "enemy" | "player") => {
  return state.cardCache[state.moveCount]?.[actionMaker];
};

const isActionerCacheBlank = (state: InitialState, actionMaker: "enemy" | "player") => {
    return state.cardCache[state.moveCount]?.[actionMaker] === null;
};

const decideCardDestiny = (
  state: InitialState,
  enemy: Card,
  playerCard: Card
) => {
  console.log("decideCardDestiny", enemy, playerCard);

  if (enemy.borderColor === playerCard.borderColor) {
    //Defender(Health)-Attacker(Attack)<=0 destroy defender card
    //Attacker(Health)-Defender(Attack)<=0 destroy attacker card
    //else both loose health
    enemy.cardHealth -= playerCard.cardAttack;
    playerCard.cardHealth -= enemy.cardAttack;
    if (enemy.cardHealth - playerCard.cardAttack <= 0) {
      const cardIndex = state.board.enemy.findIndex(
        (card) => card.cardId === enemy.cardId
      );
      state.board.enemy.splice(cardIndex, 1);
    }
    if (playerCard.cardHealth - enemy.cardAttack <= 0) {
      const cardIndex = state.board.player.findIndex(
        (card) => card.cardId === playerCard.cardId
      );
      state.board.player.splice(cardIndex, 1);
    }
  }
};

const clearMove = (state: InitialState) => {
  state.moveCount = 0;
  state.cardCache = [{ player: null, enemy: null }];
  state.board.player.forEach((card) => {
    card.borderColor = "";
    card.isSelected = false;
    card.boardPairId = null;
  });
  state.board.enemy.forEach((card) => {
    card.borderColor = "";
    card.isSelected = false;
    card.boardPairId = null;
  });
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

  cardCache: [{ player: null, enemy: null }],
  moveCount: 0,
};

export const handSlice = createSlice({
  name: "hand",
  initialState,
  reducers: {
    advanceScenarioMove: (state: InitialState) => {
      //get enemy board cards
      const enemys = state.board.enemy.filter((card) => card.boardPairId);
      //get player board cards
      const playerCards = state.board.player.filter((card) => card.boardPairId);
      console.log("enemys", enemys.length);
      console.log("playerCards", playerCards.length);

      if (enemys.length === playerCards.length) {
        enemys.forEach((enemy) => {
          playerCards.forEach((playerCard) => {
            if (enemy.boardPairId === playerCard.boardPairId) {
              console.log("enemy", enemy);
              console.log("playerCard", playerCard);
              decideCardDestiny(state, enemy, playerCard);
            }
          });
        });
      }
      clearMove(state)
    },
   
    clickBoardCard: (
      state: InitialState,
      action: { payload: { clickedCard: Card | any, actionMaker: "enemy" | "player"  } }
    ) => {
      const actionMaker = action.payload.actionMaker = "enemy"
      const cardOwner =
        action.payload.clickedCard.cardOwner === "player" ? "player" : "enemy";
      const clickedCard = state.board[cardOwner].find(
        (card) => card.cardId === action.payload.clickedCard.cardId
      );
      if (isCard_CachePlayable(state, clickedCard)) {
        if (clickedCard && clickedCard.cardOwner === (actionMaker)) { 
          //clear cache
          if (isActionerCacheBlank(state, actionMaker)) {
            console.log("enemy card bos degildi")
            clickedCard.borderColor = getBorderColor(state);
            clickedCard.isSelected = true;
            state.cardCache[state.moveCount][actionMaker] = clickedCard;
          } else {
            console.log("enemy card bostu")
            state.cardCache[state.moveCount][actionMaker]!.borderColor = "";
            state.cardCache[state.moveCount][actionMaker]!.isSelected = false;
            const boardCard = state.board[actionMaker].find(
              (card) =>
                card.cardId ===
                state.cardCache[state.moveCount][actionMaker]?.cardId
            );
            debugger
            if (boardCard) {
              boardCard.borderColor = "";
              boardCard.isSelected = false;
            }
            state.cardCache[state.moveCount].player = null;
            state.cardCache[state.moveCount].enemy = null;
            clickedCard.borderColor = getBorderColor(state);
            clickedCard.isSelected = true;
            state.cardCache[state.moveCount][actionMaker] = clickedCard;
          }
        } else if (clickedCard && clickedCard.cardOwner === (actionMaker === "enemy"?"player":"enemy")) {
          if (isPlayerPendingPair(state, clickedCard, actionMaker)) {
            //set pairing id
            const pairingId = clickedCard.cardId;
            console.log(pairingId);
            state.cardCache[state.moveCount][actionMaker as "enemy" | "player"]!.boardPairId =
              pairingId;
            const actionerCard = state.board[actionMaker === "enemy"?"player":"enemy"].find(
              (card) => card.borderColor === getBorderColor(state)
            );
            if (actionerCard) {
              actionerCard.boardPairId = pairingId;
            }
            clickedCard.borderColor = getBorderColor(state);
            clickedCard.isSelected = true;
            clickedCard.boardPairId = pairingId;
            state.cardCache[state.moveCount].player = clickedCard;
            state.moveCount++;
            state.cardCache[state.moveCount] = {
              player: null,
              enemy: null,
            };
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
  advanceScenarioMove,
} = handSlice.actions;
export default handSlice.reducer;
