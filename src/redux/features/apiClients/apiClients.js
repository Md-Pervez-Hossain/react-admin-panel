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
      query: (query) => {
        const token = JSON.parse(localStorage.getItem('loginAuth'))?.accessToken;
        return {
          url: `client/apiClient/list/?${query}`,
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
    editApiClients: builder.mutation({
      query: ({ data, id }) => {
        const token = JSON.parse(localStorage.getItem('loginAuth'))?.accessToken;
        return {
          url: `client/apiClient/${id}/`,
          method: "PATCH",
          headers: {
            Authorization: `Token ${token}`,
          },
          body: data
        };
      },
      invalidatesTags: ['apiClients'],
    }),

  })
})

export const {
  useAddApiClientsMutation,
  useGetAPiClientsQuery,
  useDeleteApiClientsMutation,
  useEditApiClientsMutation
} = userApi;
