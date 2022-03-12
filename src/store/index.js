import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { loadState } from "../utility/browser-storage";


import AuthRedux from './AuthRedux';
import TriviaRedux from './TriviaRedux';

const reducers = combineReducers({

  auth: AuthRedux,
  trivia: TriviaRedux,

});

export const store = configureStore({
  devTools: true,
  reducer: reducers,
  preloadedState: loadState(),
});