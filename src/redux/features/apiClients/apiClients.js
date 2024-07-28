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
    deleteApiClients: builder.mutation({
      query: (id) => {
        const token = JSON.parse(localStorage.getItem('loginAuth'))?.accessToken;
        return {
          url: `/client/apiClient/${id}`,
          method: "DELETE",
          headers: {
            Authorization: `Token ${token}`,
          },
        };
      },
      invalidatesTags: ['apiClients'],
    }),
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
  useGetAPiClientsQuery,
  useDeleteApiClientsMutation
} = userApi;
