import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TPost } from './types';

export const placeholderApi = createApi({
  reducerPath: 'placeholderAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPosts: builder.query<TPost[], { page?: number, limit?: number }>({
      query: ({page, limit}) => ({
        url: 'posts',
        params: {
          _page: page,
          _limit: limit,
        }
      })
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
