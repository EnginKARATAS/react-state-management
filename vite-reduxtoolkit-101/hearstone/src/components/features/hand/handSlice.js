import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [
    {
      cardId: 1,
      cardName: "CSS Unleasher",
      cardType: "minion",
      cardCost: 1,
      cardAttack: 2,
      cardHealth: 3,
      cardDescription: "Unleash CSS Skills, deal 1 damage to all enemy minions. Draw a card.",
    }
  ],
};

const createRandomCard = () => {
  const cardNames = ["CSS Unleasher", "Portfoliotize", "LinkedIn Bot", "Resume Builder", "Interview Prep", "Job Application", "Job Interview", "Job Offer"];
  const cardDescriptions = ["Unleash CSS Skils, deal 1 damage to all enemy minions. Draw a card.", "Find an amazing company and let them follow you on LinkedIn.", "This is a random card", "This is a random card", "This is a random card", "This is a random card", "This is a random card", "This is a random card"];
  const cardTypes = ["minion", "spell", "weapon"];

  const randomIndex = Math.floor(Math.random() * cardNames.length);
  const randomCard = {
    cardName: cardNames[randomIndex],
    cardType: cardTypes[Math.floor(Math.random() * cardTypes.length)],
    cardCost: Math.floor(Math.random() * 10),
    cardAttack: Math.floor(Math.random() * 10),
    cardHealth: Math.floor(Math.random() * 10),
    cardDescription: cardDescriptions[randomIndex],
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
