import { configureStore } from '@reduxjs/toolkit';
import { handleChangeState } from './observerSlice';

export const { changeState } = handleChangeState.actions;

export const store = configureStore({
  reducer: handleChangeState.reducer,
});
