import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISidebarState, setVisibleSidebar } from "./types";

const initialState: ISidebarState = {
  visible: false 
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setVisibleSidebar: (state, action: PayloadAction<setVisibleSidebar>) => {
			const { visible } = action.payload;
      state.visible = visible;
    },
  },
});

export default sidebarSlice.reducer;

export const { reducer, actions } = sidebarSlice;