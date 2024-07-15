import { api } from "../../api/apiSlice";
import { userLogin, userLogout } from "./authSlice";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: '/auth/login/',
        method: "POST",
        body: data
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log(result);
          // set data in localStorage
          localStorage.setItem('loginAuth', JSON.stringify({ accessToken: result.data.token }));
          // set data in redux store
          dispatch(userLogin({ accessToken: result.data.token }));
        } catch (error) {
          console.log("error from authApi ", error);
        }
      }
    }),
    logout: builder.mutation({
      query: (data) => {
        const token = JSON.parse(localStorage.getItem('loginAuth'))?.accessToken;
        return {
          url: '/auth/logout/',
          method: "POST",
          headers: {
            Authorization: `Token ${token}`,
          },
          body: data
        };
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log(result);
          // remove data from localStorage
          localStorage.removeItem('loginAuth');
          // remove data from redux store
          dispatch(userLogout({ accessToken: null }));
        } catch (error) {
          console.log("error from authApi ", error);
        }
      }
    }),
  })
});

export const { useLoginMutation, useLogoutMutation } = authApi;
