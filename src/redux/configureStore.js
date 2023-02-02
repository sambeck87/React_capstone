import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
  },
}, applyMiddleware(thunk));

export default store;
