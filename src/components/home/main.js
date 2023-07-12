"use client"
import CheckIns from '../checkIns'  
import React from 'react';
import { Provider } from 'react-redux';
import  store  from '../redux/store';  

const Main = () => {
  return (
    <Provider store={store}> 
       <CheckIns />  
    </Provider>
  );
};

export default Main;