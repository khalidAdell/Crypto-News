import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "680fae86d8msh2dfab7cad0c8da5p1d2fccjsn24aa7ae75f84",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};
const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders });
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (bulider) => ({
    getCurrency: bulider.query<any, number>({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getSingleCurrency: bulider.query<any, any>({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
  }),
});

export const { useGetCurrencyQuery, useGetSingleCurrencyQuery } = cryptoApi;
