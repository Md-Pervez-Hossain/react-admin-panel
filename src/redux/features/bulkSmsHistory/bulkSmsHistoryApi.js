import { api } from "../../api/apiSlice";



const bulkSmsHistoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addbulkSmsHistoryResend: builder.mutation({
      query: (id) => {
        const token = JSON.parse(localStorage.getItem('loginAuth'))?.accessToken;
        return {
          url: `service/bulk-sms-resend/${id}/`,
          method: "POST",
          headers: {
            Authorization: `Token ${token}`,
          },
          body: id
        };
      },
      invalidatesTags: ['bulkSmsResend'],
    }),
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
      providesTags: ['bulkSms', 'bulkSmsResend'],
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
      providesTags: ['bulkSms', 'bulkSmsResend'],
    }),

  })
})

export const {
  useGetBulkSmsHistoryQuery,
  useGetBulkSmsHistoryDetailsQuery,
  useAddbulkSmsHistoryResendMutation

} = bulkSmsHistoryApi;
