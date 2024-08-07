import { api } from "../../api/apiSlice";

const profileApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => `user/profile/`,
      providesTags: ['profile'],
    }),
    updateProfile: builder.mutation({
      query: (body) => ({
        url: `user/profile/`,
        method: 'PATCH',
        body: body
      }),
      invalidatesTags: ['profile'],
    }),
  })
})

export const {
  useGetProfileQuery,
  useUpdateProfileMutation
} = profileApi;
