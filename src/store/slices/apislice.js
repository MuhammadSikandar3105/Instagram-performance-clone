import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    tagTypes: ['Posts', 'Users'],
    endpoints: (builder) => ({
        getposts: builder.query({
            query: () => '/posts',
            providesTags: ['Posts']
        }),
        addpost: builder.mutation({
            query: (post) => ({
                url: '/posts',
                method: 'POST',
                body: { ...post, likes: [], comments: [] }
            }),
            invalidatesTags: ['Posts']
        }),
        deletepost: builder.mutation({
            query: (id) => ({
                url: `/post/${id}`,
                method: 'DELETE'
            })
        }),
        getusers: builder.query({
            query: () => '/users',
            providesTags: ['Users']
        }),
    })
})

export const { useGetpostsQuery, useAddpostMutation, useDeletepostMutation, useGetusersQuery } = api