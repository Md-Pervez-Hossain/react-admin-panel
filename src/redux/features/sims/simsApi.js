import { api } from "../../api/apiSlice";


const simsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // addDevice: builder.mutation({
    //   query: (data) => {
    //     const token = JSON.parse(localStorage.getItem('loginAuth'))?.accessToken;
    //     return {
    //       url: 'device/devices/create/',
    //       method: "POST",
    //       headers: {
    //         Authorization: `Token ${token}`,
    //       },
    //       body: data
    //     };
    //   },

    //   invalidatesTags: ['device'],
    // }),
    getDeviceSims: builder.query({
      query: (query) => {
        const token = JSON.parse(localStorage.getItem('loginAuth'))?.accessToken;
        return {
          url: `/device/sims/?${query}`,
          method: "GET",
          headers: {
            Authorization: `Token ${token}`,
          },
        };
      },
      providesTags: [''],
    }),
    // deleteDevice: builder.mutation({
    //   query: (id) => {
    //     const token = JSON.parse(localStorage.getItem('loginAuth'))?.accessToken;
    //     return {
    //       url: `device/devices/${id}/`,
    //       method: "DELETE",
    //       headers: {
    //         Authorization: `Token ${token}`,
    //       },
    //     };
    //   },
    //   invalidatesTags: ['device'],
    // }),
    // editDevice: builder.mutation({
    //   query: ({ data, id }) => {
    //     const token = JSON.parse(localStorage.getItem('loginAuth'))?.accessToken;
    //     return {
    //       url: `device/devices/${id}/`,
    //       method: "PATCH",
    //       headers: {
    //         Authorization: `Token ${token}`,
    //       },
    //       body: data
    //     };
    //   },
    //   invalidatesTags: ['device'],
    // }),
  })
})

export const {
  useGetDeviceSimsQuery
} = simsApi;
