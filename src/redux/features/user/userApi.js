import { api } from "../../api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getGroup: builder.query({
      query: () => `/posts`,
      providesTags: ['group'],
    }),
    getAds: builder.query({
      query: (query) => `/ads/list?${query}`,
      providesTags: ['ads'],
    },),
    getAdsDetails: builder.query({
      query: (id) => `/ads/details?ads_no=${id}`,
      providesTags: ['ads'],
    }),
    addAds: builder.mutation({
      query: (body) => ({
        url: `ads/add`,
        method: 'POST',
        body: body
      }),
      invalidatesTags: ['ads'],
    }),
    updateAds: builder.mutation({
      query: (body) => ({
        url: `/ads/update`,
        method: 'PUT',
        body: body
      }),
      invalidatesTags: ['ads'],
    }),
    deleteAds: builder.mutation({
      query: (id) => ({
        url: `/ads/delete`,
        method: 'DELETE',
        body: id
      }),
      invalidatesTags: ['ads'],
    }),
  })
})

export const {
  useGetGroupQuery,
  useAddAdsMutation,
  useGetAdsQuery,
  useDeleteAdsMutation,
  useGetAdsDetailsQuery,
  useUpdateAdsMutation
} = userApi;
