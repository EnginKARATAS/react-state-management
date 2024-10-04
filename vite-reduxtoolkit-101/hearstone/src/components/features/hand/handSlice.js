import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
};

const createRandomCard = () => {
  const cardNames = [
    ["CSS Unleasher", "cat", "Unleash CSS Skils, deal 1 damage to all enemy minions. Draw a card."],
    ["Portfoliotize", "cat", "Find an amazing company and let them follow you on LinkedIn."],
    ["LinkedIn Bot", "cat", "This is a random card"],
    ["Resume Builder", "cat", "This is a random card"],
    ["Interview Prep", "cat", "This is a random card"],
    ["Job Application", "cat", "This is a random card"],
    ["Job Interview", "cat", "This is a random card"],
    ["Job Offer", "cat"]
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
