//@ts-nocheck
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { modalSlice } from './modals/reducer';
import authReducer, {authSlice} from './users/reducer'
import {apiSlice} from "@store/api/reducer";
import {cmsEnhanced} from "@store/editor/reducerEnhansed";
import {formsSlice} from "@store/forms/reducer";
import {formsEnhansed} from "@store/forms/endpointsEnhansed";
import { sidebarSlice } from './sidebar/reducer';

/*const rootReducer = combineReducers ({
  modals: modalSlice.reducer,
	auth: authReducer
});*/

export const setupStore = () => {
	return configureStore({
		reducer: {
			modals: modalSlice.reducer,
			sidebar: sidebarSlice.reducer,
			forms: formsSlice.reducer,
			auth: authSlice.reducer,
			[cmsEnhanced.reducerPath]: cmsEnhanced.reducer,
			[formsEnhansed.reducerPath]: formsEnhansed.reducer
		},
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
			apiSlice.middleware,
			cmsEnhanced.middleware,
			formsEnhansed.middleware,
		),
	});
}
export const store = setupStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];