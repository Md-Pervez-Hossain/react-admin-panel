import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { userLogout } from '../features/auth/authSlice';

const baseQueryFn = fetchBaseQuery({
  baseUrl: "http://192.168.1.225:8000",
  prepareHeaders: async (headers, { getState }) => {
    const token = getState()?.auth?.accessToken;

    if (token) {
      headers.set("Authorization", `Token ${token}`);
    }
    return headers;
  }
});

export const api = createApi({
  reducerPath: "api",
  baseQuery: async (args, api, extraOptions) => {
    const result = await baseQueryFn(args, api, extraOptions);
    if (result?.error?.status === 401) {
      api.dispatch(userLogout(undefined));

    }
    return result;
  },
  tagTypes: ["apiClients"],
  endpoints: (builder) => ({

  }),
});
