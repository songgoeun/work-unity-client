import { combineReducers } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import viewReducer from './view.slice';
import store from '../store';

export default combineReducers({
  view: viewReducer,
});

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export * from './view.slice';
