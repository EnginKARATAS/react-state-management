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
      cardDescription: "Unleash CSS Skils, deal 1 damage to all enemy minions. Draw a card.",
    },
    {
      cardId: 1,
      cardName: "Portfoliotize",
      cardType: "minion",
      cardCost: 2,
      cardAttack: 7,
      cardHealth: 5,
      cardDescription: "Find an amazing company and let them follow you on LinkedIn.",
    }
  ],
};

const createRandomCard = () => {
  const card = Math.floor(Math.random() * 10);

  const randomCard = {
    cardName: ["CSS Unleasher", "Portfoliotize", "LinkedIn Bot", "Resume Builder", "Interview Prep", "Job Application", "Job Interview", "Job Offer"];
    cardDesc: ["Unleash CSS Skils, deal 1 damage to all enemy minions. Draw a card.", "Find an amazing company and let them follow you on LinkedIn.", "This is a random card", "This is a random card", "This is a random card", "This is a random card", "This is a random card", "This is a random card"],
    cardType: ["minion", "spell", "weapon"],
    cardCost : Math.floor(Math.random() * 10),
    cardAttack : Math.floor(Math.random() * 10),
    cardHealth : Math.floor(Math.random() * 10),
    cardDescription : cardDesc[card]
  }
 return randomCard
};
export const handSlice = createSlice({
  name: "hand",
  initialState,
  reducers: {
    addCard: (state) => {
      state.cards.push(createRandomCard());
    },
  },
});

export const { addCard } = handSlice.actions;

export default handSlice.reducer;
