import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    endpoints: (builder) => ({
        getposts: builder.query({
            query: () => '/posts'
        }),
        addpost: builder.mutation({
            query: (post) => ({
                url: '/posts',
                method: 'POST',
                body: post
            })
        }),
        deletepost: builder.mutation({
            query: (id) => ({
                url: `/post/${id}`,
                method: 'DELETE'
            })
        }),
    })
})

export const { useGetpostsQuery, useAddpostMutation, useDeletepostMutation } = api