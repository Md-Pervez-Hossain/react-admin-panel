import { api } from "../../api/apiSlice";



const bulkSmsHistoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBulkSmsHistory: builder.query({
      query: () => {
        const token = JSON.parse(localStorage.getItem('loginAuth'))?.accessToken;
        return {
          url: `/service/bulk-sms-history/`,
          method: "GET",
          headers: {
            Authorization: `Token ${token}`,
          },
        };
      },
      providesTags: ['bulkSms'],
    }),
    getBulkSmsHistoryDetails: builder.query({
      query: ({ id, query }) => {
        const token = JSON.parse(localStorage.getItem('loginAuth'))?.accessToken;
        return {
          url: `/service/bulk-sms-history/${id}/?${query}`,
          method: "GET",
          headers: {
            Authorization: `Token ${token}`,
          },
        };
      },
      providesTags: ['bulkSms'],
    }),

  })
})

export const {
  useGetBulkSmsHistoryQuery,
  useGetBulkSmsHistoryDetailsQuery
} = bulkSmsHistoryApi;
