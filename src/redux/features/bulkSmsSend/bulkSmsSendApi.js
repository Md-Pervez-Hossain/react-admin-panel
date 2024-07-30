import { api } from "../../api/apiSlice";



const bulkSmsSendApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addbulkSmsSend: builder.mutation({
      query: (data) => {
        const token = JSON.parse(localStorage.getItem('loginAuth'))?.accessToken;
        return {
          url: 'service/bulk-sms-send/',
          method: "POST",
          headers: {
            Authorization: `Token ${token}`,
          },
          body: data
        };
      },

      invalidatesTags: ['bulkSmsSend'],
    }),
    // getbulkSmsClients: builder.query({
    //   query: (query) => {
    //     const token = JSON.parse(localStorage.getItem('loginAuth'))?.accessToken;
    //     return {
    //       url: `client/bulkClient/list/?${query}`,
    //       method: "GET",
    //       headers: {
    //         Authorization: `Token ${token}`,
    //       },
    //     };
    //   },
    //   providesTags: ['bulkSms'],
    // }),
    // deletebulkSmsClients: builder.mutation({
    //   query: (id) => {
    //     const token = JSON.parse(localStorage.getItem('loginAuth'))?.accessToken;
    //     return {
    //       url: `client/bulkClient/${id}`,
    //       method: "DELETE",
    //       headers: {
    //         Authorization: `Token ${token}`,
    //       },
    //     };
    //   },
    //   invalidatesTags: ['bulkSms'],
    // }),
    // editbulkSmsClients: builder.mutation({
    //   query: ({ data, id }) => {
    //     const token = JSON.parse(localStorage.getItem('loginAuth'))?.accessToken;
    //     return {
    //       url: `client/bulkClient/${id}/`,
    //       method: "PATCH",
    //       headers: {
    //         Authorization: `Token ${token}`,
    //       },
    //       body: data
    //     };
    //   },
    //   invalidatesTags: ['bulkSms'],
    // }),

  })
})

export const {
  useAddbulkSmsSendMutation
} = bulkSmsSendApi;
