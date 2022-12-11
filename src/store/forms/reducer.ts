import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IFormsState, SetInvest, TInvestData} from "./types";
import {RootState} from "@store/store";

const initialState: IFormsState = {
  invest: {} as TInvestData
};

export const formsSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    setDataInvest: (state, action: PayloadAction<SetInvest>) => {
      const { data } = action.payload;
      state.invest = data;
    },
  },
});

export default formsSlice.reducer;

export const { reducer, actions } = formsSlice;

export const selectInvestData = (state: RootState) => state.forms.invest;