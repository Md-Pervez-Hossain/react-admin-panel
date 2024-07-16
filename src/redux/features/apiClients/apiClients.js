import { api } from "../../api/apiSlice";


const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addApiClients: builder.mutation({
      query: (data) => {
        const token = JSON.parse(localStorage.getItem('loginAuth'))?.accessToken;
        return {
          url: 'client/apiClient/create/',
          method: "POST",
          headers: {
            Authorization: `Token ${token}`,
          },
          body: data
        };
      },

      invalidatesTags: ['apiClients'],
    }),
    getAPiClients: builder.query({
      query: () => {
        const token = JSON.parse(localStorage.getItem('loginAuth'))?.accessToken;
        return {
          url: 'client/apiClient/list/',
          method: "GET",
          headers: {
            Authorization: `Token ${token}`,
          },
        };
      },
      providesTags: ['apiClients'],
    }),
    // getAds: builder.query({
    //   query: (query) => `/ads/list?${query}`,
    //   providesTags: ['ads'],
    // },),
    // getAdsDetails: builder.query({
    //   query: (id) => `/ads/details?ads_no=${id}`,
    //   providesTags: ['ads'],
    // }),
    // deleteAds: builder.mutation({
    //   query: (id) => ({
    //     url: `/ads/delete`,
    //     method: 'DELETE',
    //     body: id
    //   }),
    //   invalidatesTags: ['ads'],
    // }),
    // updateAds: builder.mutation({
    //   query: (body) => ({
    //     url: `/ads/update`,
    //     method: 'PUT',
    //     body: body
    //   }),
    //   invalidatesTags: ['ads'],
    // }),

  })
})

export const {
  useAddApiClientsMutation,
  useGetAPiClientsQuery
} = userApi;
