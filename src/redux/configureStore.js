import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import crytoReducer from './crypto/CryptoData';

const store = configureStore({
  reducer: {
    crytoReducer,
  },
}, applyMiddleware(thunk));

export default store;
