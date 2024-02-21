import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TPost } from './types';

export const placeholderApi = createApi({
  reducerPath: 'placeholderAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPosts: builder.query<TPost[], void>({
      query: () => ({ url: 'posts'})
    }),
    getPostById: builder.query<TPost, number>({
      query: (id) => ({ url: `posts/${id}`})
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
} = placeholderApi;
