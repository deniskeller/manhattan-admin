import {
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react';
import {RootState} from "@store/store";

const baseQuery = fetchBaseQuery({
  //baseUrl: process.env.REACT_APP_API_URL,
  baseUrl:  "https://manisland.ipagar.labado.ru/api",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.access_token;
    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  endpoints: () => ({}),
});