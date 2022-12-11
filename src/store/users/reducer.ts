import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {LoginResponseDto, UserDto} from "@store/users/types";
import {RootState} from "@store/store";

const initialState: Partial<LoginResponseDto> & { user?: UserDto} = {
  //user: JSON.parse(localStorage.getItem('user') || 'null'),
  user: {role: 'admin', id: 0, email: "admin@test.ru", firstName: "admin1", lastName: ""},
  access_token: typeof localStorage !== "undefined" ? localStorage.getItem('access_token') || undefined : undefined,
  refresh_token: typeof localStorage !== "undefined" ? localStorage.getItem('refresh_token') || undefined : undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<LoginResponseDto>) => {
      localStorage.setItem('access_token', action.payload.access_token);
      state.access_token = action.payload.access_token;

      localStorage.setItem('refresh_token', action.payload.refresh_token);
      state.refresh_token = action.payload.refresh_token;
    },
    clearCredentials: (state) => {
      localStorage.removeItem('access_token');
      state.access_token = undefined;

      localStorage.removeItem('refresh_token');
      state.refresh_token = undefined;
    },
    setUser: (state, action: PayloadAction<UserDto>) => {
      console.log("SetUser", action.payload);
      localStorage.setItem('user', JSON.stringify(action.payload));
      state.user = action.payload;
    },
    clearUser: (state) => {
      console.log("clearUser");
      localStorage.removeItem('user');
      state.user = undefined;
    },
  },
});
export const { setCredentials, clearCredentials, setUser, clearUser } =
  authSlice.actions;

export default authSlice.reducer;

export const selectUser = (state: RootState) => state.auth.user;
export const selectAccessToken = (state: RootState) => state.auth.access_token;