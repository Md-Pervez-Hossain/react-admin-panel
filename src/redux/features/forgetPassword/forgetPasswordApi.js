import { api } from "../../api/apiSlice";


const forgetPasswordApi = api.injectEndpoints({
  endpoints: (builder) => ({
    sendTokenEmail: builder.mutation({
      query: (data) => {
        return {
          url: 'auth/forget-password/',
          method: "POST",
          body: data
        };
      },
    }),
    setPassword: builder.mutation({
      query: (data) => {
        return {
          url: 'auth/reset-password/',
          method: "POST",
          body: data
        };
      },
    }),
    // getDevice: builder.query({
    //   query: () => {
    //     const token = JSON.parse(localStorage.getItem('loginAuth'))?.accessToken;
    //     return {
    //       url: 'device/devices/list/',
    //       method: "GET",
    //       headers: {
    //         Authorization: `Token ${token}`,
    //       },
    //     };
    //   },
    //   providesTags: ['device'],
    // }),

  })
})

export const {
  useSendTokenEmailMutation,
  useSetPasswordMutation
} = forgetPasswordApi;
