import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { loadState } from "../utility/browser-storage";

import AuthRedux from './AuthRedux';
import UserRedux from './UserRedux';
import TriviaRedux from './TriviaRedux';
import OrderRedux from './OrderRedux';

const reducers = combineReducers({
  auth: AuthRedux,
  user: UserRedux,
  trivia: TriviaRedux,
  order: OrderRedux,
});

export const store = configureStore({
  devTools: true,
  reducer: reducers,
  preloadedState: loadState(),
});