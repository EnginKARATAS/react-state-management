import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/features/counter/counterSlice'
import handReducer from '../components/features/hand/handSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    hand: handReducer
  },
})