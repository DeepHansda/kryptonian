import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headers = {
  "X-RapidAPI-Key": "f3f3e8f47amshc2a3fb72da4691bp17e7c5jsnbfef0ba541f6",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};
const baseUrl = "https://coinranking1.p.rapidapi.com";
const createRequest = (url) => {
  return {
    url,
    headers,
  };
};
export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getAllCoins: builder.query({
      query: () => createRequest("/coins"),
    }),
    getGlobalData:builder.query({
        query:()=>createRequest('/stats')
    }),
    getCoinDetails:builder.query({
      query:(id)=>createRequest(`/coin/${id}`)
    })
  }),
});

export const { useGetAllCoinsQuery,useGetGlobalDataQuery ,useGetCoinDetailsQuery} = apiSlice;
