import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IModalState, SetPopup } from "./types";

const initialState: IModalState = {
  popup: "" 
};

export const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setPopup: (state, action: PayloadAction<SetPopup>) => {
			const { popup } = action.payload;
      state.popup = popup;
    },
  },
});

export default modalSlice.reducer;

export const { reducer, actions } = modalSlice;