import { createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const cryptoApiHeaders={
    'x-rapidapi-host': 'api.coinranking.com/v2',
    'x-rapidapi-key': 'coinranking5b0fd92edd363b7ee5bf7fac9df016c365f893e00f20fca5'

}
const baseUrl = 'https://api.coinranking.com/v2';
const createRequest=(url) => ({ url, headers: cryptoApiHeaders})
 
export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos:builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }), 
        getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history/${timeperiod}`),
        })
    }),
});
export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetExchangesQuery
} = cryptoApi;