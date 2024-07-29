import { api } from "../../api/apiSlice";

const deviceApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addDevice: builder.mutation({
      query: (data) => {
        const token = JSON.parse(localStorage.getItem('loginAuth'))?.accessToken;
        return {
          url: 'device/devices/create/',
          method: "POST",
          headers: {
            Authorization: `Token ${token}`,
          },
          body: data
        };
      },

      invalidatesTags: ['device'],
    }),
    getDevice: builder.query({
      query: () => {
        const token = JSON.parse(localStorage.getItem('loginAuth'))?.accessToken;
        return {
          url: 'device/devices/list/',
          method: "GET",
          headers: {
            Authorization: `Token ${token}`,
          },
        };
      },
      providesTags: ['device'],
    }),
    deleteDevice: builder.mutation({
      query: (id) => {
        const token = JSON.parse(localStorage.getItem('loginAuth'))?.accessToken;
        return {
          url: `device/devices/${id}/`,
          method: "DELETE",
          headers: {
            Authorization: `Token ${token}`,
          },
        };
      },
      invalidatesTags: ['device'],
    }),
    editDevice: builder.mutation({
      query: ({ data, id }) => {
        const token = JSON.parse(localStorage.getItem('loginAuth'))?.accessToken;
        return {
          url: `device/devices/${id}/`,
          method: "PATCH",
          headers: {
            Authorization: `Token ${token}`,
          },
          body: data
        };
      },
      invalidatesTags: ['device'],
    }),
  })
})

export const {
  useAddDeviceMutation,
  useGetDeviceQuery,
  useDeleteDeviceMutation,
  useEditDeviceMutation

} = deviceApi;
