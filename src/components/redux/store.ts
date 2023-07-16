import { configureStore } from '@reduxjs/toolkit';
import CheckInsReducer from './checkInsSlice'; 

const store = configureStore({
  reducer: {
    checkIns: CheckInsReducer,  
  } 
});
export type RootState = ReturnType<typeof store.getState>; // Define RootState type based on the store
export type AppDispatch = typeof store.dispatch; // Define AppDispatch type based on the store
export default store;
