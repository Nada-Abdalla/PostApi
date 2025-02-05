import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "../models/post";

type CreatePostArgs = Omit<Post, "id">;
type UpdatePostArgs = Post;

export const postApi = createApi({
  reducerPath: "post",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/posts",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => ({
        url: "",
        method: "GET",
      }),
    }),
    getPost: builder.query<Post, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
      onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
        try {
          const { data: post } = await queryFulfilled;
          dispatch(
            postApi.util.updateQueryData("getPosts", undefined, () => {
              return [post];
            })
          );
        } catch {}
      },
    }),
    updatePost: builder.mutation<Post, UpdatePostArgs>({
      query: (args) => ({
        url: `/${args.id}`,
        method: "PUT",
        body: args,
      }),
      onQueryStarted: async (args, { dispatch, queryFulfilled }) => {
        try {
          const { data: updatedPost } = await queryFulfilled;
          dispatch(
            postApi.util.updateQueryData("getPosts", undefined, (posts) => {
              const post = posts.find((p) => p.id === args.id);
              if (post) {
                post.title = args.title;
                post.body = args.body;
              }
            })
          );
        } catch (error) {
          console.error("Failed to update cache", error);
        }
      },
    }),
    deletePost: builder.mutation<void, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
        try {
          const { data: deletePost } = await queryFulfilled;
          dispatch(
            postApi.util.updateQueryData("getPosts", undefined, (posts) => {
              return posts.filter((post) => post.id !== Number(id));
            })
          );
        } catch {}
      },
    }),

    creatPost: builder.mutation<Post, CreatePostArgs>({
      query: (args) => ({
        url: "",
        method: "POST",
        body: args,
      }),
      onQueryStarted: async (args, { dispatch, queryFulfilled }) => {
        try {
          const { data: createdPost } = await queryFulfilled;
          dispatch(
            postApi.util.updateQueryData("getPosts", undefined, (posts) => {
              return [createdPost, ...posts];
            })
          );
        } catch {}
      },
    }),
  }),
});
