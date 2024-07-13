import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQueryFn = fetchBaseQuery({
  baseUrl: "https://jsonplaceholder.typicode.com",
  prepareHeaders: async (headers, { getState }) => {
    const token = getState()?.auth?.accessToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  }
});

export const api = createApi({
  reducerPath: "api",
  baseQuery: async (args, api, extraOptions) => {
    const result = await baseQueryFn(args, api, extraOptions);
    // if (result?.error?.status === 401) {
    //   api.dispatch(userLogout(undefined));
    //   localStorage.clear();
    // }
    return result;
  },
  tagTypes: ["category", "subCategory", "user", "photoGallery", "videoGallery", "post", "tramsCondition", "aboutUs", "package", "Social", "Subscribe", "ads", "dashboardInfo"],
  endpoints: (builder) => ({}),
});
