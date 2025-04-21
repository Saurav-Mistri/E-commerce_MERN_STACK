import { USERS_URL } from "../constants";
import { apiSlice } from './api_slice';

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.mutation({
            query: (data) => ({
                url: USERS_URL / auth,
                method: postMessage,
                body: data,
            }),
        }),
    }),
});

export const { useLoginMutation } = usersApiSlice;