import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
};

const createRandomCard = () => {
  const cardNames = [
    ["Yavuz Reis", "cat", "Bu kart oynandığı anda kullanıcısına anında 10 yıllık tecrübe kazandırır."],
    ["Diktatör", "dictator", "Bu kart oynandığında en düşük mana kullanan savaşçı kartını yok eder."],
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
  };
  return randomCard;
};
export const handSlice = createSlice({
  name: "hand",
  initialState,
  reducers: {
    drawCard: (state) => {
      state.cards.push(createRandomCard());
    },

  },
});

export const { drawCard } = handSlice.actions;

export default handSlice.reducer;
