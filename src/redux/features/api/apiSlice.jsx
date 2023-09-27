import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
  tagTypes: ["Books", "Book"],
  keepUnusedDataFor: 300,
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => ({
        url: "/books",
        method: "GET",
      }),

      providesTags: ["Books"],
    }),
    addBook: builder.mutation({
      query: (data) => ({
        url: "/books",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Books"],
    }),
    getSingelBook: builder.query({
      query: (id) => ({
        url: `/books/${id}`,
        method: "GET",
      }),
      providesTags: (results, error, arg) => [{ type: "Book", id: arg }],
    }),
    editBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (results, error, arg) => [
        "Books",
        { type: "Book", id: arg.id },
      ],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useGetSingelBookQuery,
  useEditBookMutation,
} = apiSlice;
