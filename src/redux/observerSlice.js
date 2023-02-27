import { createSlice } from '@reduxjs/toolkit';

export const state = {
  isElementVisible: false,
};

export const handleChangeState = createSlice({
  name: 'changeState',
  initialState: state,
  reducers: {
    changeState(state, action) {
      state.isElementVisible = action.payload;
    },
  },
});
