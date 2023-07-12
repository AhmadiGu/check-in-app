"use client"  
import React from 'react';
import { Provider } from 'react-redux';
import  store  from '../redux/store';  
import DetailsItem from '../detailsItem';

const Detail = () => {
  return (
    <Provider store={store}> 
        <DetailsItem /> 
    </Provider>
  );
};

export default Detail;