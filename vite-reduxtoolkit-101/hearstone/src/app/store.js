import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})