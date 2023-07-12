import { configureStore } from '@reduxjs/toolkit';
import CheckInsReducer from './checkInsSlice'; 

const store = configureStore({
  reducer: {
    checkIns: CheckInsReducer,  
  } 
});

export default store;
