import { api } from "../../api/apiSlice";


const colorApi = api.injectEndpoints({
  endpoints: (builder) => ({
    AddColor: builder.mutation({
      query: (data) => {
        const token = JSON.parse(localStorage.getItem('loginAuth'))?.accessToken;
        return {
          url: 'website/colors-list/',
          method: "POST",
          headers: {
            Authorization: `Token ${token}`,
          },
          body: data
        };
      },

      invalidatesTags: ['color'],
    }),
    getColors: builder.query({
      query: (query) => {
        const token = JSON.parse(localStorage.getItem('loginAuth'))?.accessToken;
        return {
          url: `website/colors-list/`,
          method: "GET",
          headers: {
            Authorization: `Token ${token}`,
          },
        };
      },
      providesTags: ['color'],
    }),

    DeleteColor: builder.mutation({
      query: (id) => {
        const token = JSON.parse(localStorage.getItem('loginAuth'))?.accessToken;
        return {
          url: `website/colors/${id}/`,
          method: "DELETE",
          headers: {
            Authorization: `Token ${token}`,
          },
        };
      },
      invalidatesTags: ['color'],
    }),
    editColor: builder.mutation({
      query: ({ id, value }) => {
        const token = JSON.parse(localStorage.getItem('loginAuth'))?.accessToken;
        return {
          url: `website/colors/${id}/`,
          method: "PATCH",
          headers: {
            Authorization: `Token ${token}`,
          },
          body: value
        };
      },
      invalidatesTags: ['color'],
    }),

  })
})

export const {
  useAddColorMutation, useDeleteColorMutation, useEditColorMutation, useGetColorsQuery
} = colorApi;
