import { api } from "../../../api/apiSlice";




const bulkSmsStatusApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // addbulkSmsSend: builder.mutation({
    //   query: (data) => {
    //     const token = JSON.parse(localStorage.getItem('loginAuth'))?.accessToken;
    //     return {
    //       url: 'service/bulk-sms-send/',
    //       method: "POST",
    //       headers: {
    //         Authorization: `Token ${token}`,
    //       },
    //       body: data
    //     };
    //   },

    //   invalidatesTags: ['bulkSmsSend'],
    // }),
    getBulkSmsStatusList: builder.query({
      query: () => {
        const token = JSON.parse(localStorage.getItem('loginAuth'))?.accessToken;
        return {
          url: `service/bulk-sms-status/`,
          method: "GET",
          headers: {
            Authorization: `Token ${token}`,
          },
        };
      },
      providesTags: ['bulkSmsSend', 'status'],
    }),
    getBulkSmsStatusDetails: builder.query({
      query: (id) => {
        const token = JSON.parse(localStorage.getItem('loginAuth'))?.accessToken;
        return {
          url: `service/bulk-sms-history/${id}/`,
          method: "GET",
          headers: {
            Authorization: `Token ${token}`,
          },
        };
      },
      providesTags: ['bulkSmsSend', 'status'],
    }),


  })
})

export const {
  useGetBulkSmsStatusListQuery,
  useGetBulkSmsStatusDetailsQuery
} = bulkSmsStatusApi;
