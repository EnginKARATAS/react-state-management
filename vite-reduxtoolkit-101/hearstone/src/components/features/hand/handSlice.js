import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
  singleCard: null,
  boardCards: []
};

const createRandomCard = () => {
  const cardNames = [
    ["Yavuz Reis", "cat", "Bu kart oynandığı anda kullanıcısına anında 10 yıllık tecrübe kazandırır."],
    ["Diktatör", "dictator", "Bu kart oynanırsa rakibin en düşük mana kullanan kartı yok olur."],
    ["Gitarist", "guitar", "Gitarist kartı oynandıktan sonra elinizdeki kartların hepsi 1 güç kazanır."],
    ["Ödenmiş Bedel", "soldier", "Bu kartı oynadıktan sonra iş bulma ihtimaliniz %50 artar."],
    ["Savaşçı", "worrior", "Savaşçı kartı oynandıktan sonra kullanıcının canı 1 artar."],
  ];
  const cardTypes = ["minion", "spell", "weapon"];
   

  const randomIndex = Math.floor(Math.random() * cardNames.length);
  const randomCard = {
    cardId: Math.random(),
    cardType: cardTypes[Math.floor(Math.random() * cardTypes.length)],
    cardCost: Math.floor(Math.random() * 10),
    cardName: cardNames[randomIndex][0],
    cardImageName: cardNames[randomIndex][1],
    cardDescription: cardNames[randomIndex][2],
    
    cardAttack: Math.floor(Math.random() * 10),
    cardHealth: Math.floor(Math.random() * 10),
    cardPosition: {x: 0, y: 0, size: 150, offset: 0}
  };
  return randomCard;
};
export const handSlice = createSlice({
  name: "hand",
  initialState,
  reducers: {
    drawCard: (state) => {
      if(state.cards.length < 10)
         state.cards.push(createRandomCard());
    },
    showCard: (state, action) => {
      const card = state.cards.find(card => card.cardId === action.payload.cardId)
      card.cardPosition.y = 300
      card.cardPosition.x = 300
      card.cardPosition.size = 150
      card.cardSelected = true
    },
    hoverSingleCard: (state, action) => {
      state.singleCard = action.payload
      //state.cards.splice(state.cards.indexOf(action.payload, 1))
    },

    addCardToBoard: (state, action) => {
      state.boardCards.push(action.payload)
      console.log("addCardToBoard", action.payload)
      console.log("remaining state.cards", state.cards)
    }
  },
});

export const { drawCard, showCard, hoverSingleCard,addCardToBoard } = handSlice.actions;

export default handSlice.reducer;
