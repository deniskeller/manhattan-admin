import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  setVisibleButtons } from "./types";

const initialState: setVisibleButtons = {
  visible: false 
};

export const buttonsSlice = createSlice({
  name: "buttons",
  initialState,
  reducers: {
    setVisibleButtons: (state, action: PayloadAction<setVisibleButtons>) => {
			const { visible } = action.payload;
			console.log('visible: ', visible);
      state.visible = visible;
    },
  },
});

export default buttonsSlice.reducer;

export const { reducer, actions } = buttonsSlice;