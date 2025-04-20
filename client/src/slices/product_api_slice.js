import { PRODUCTS_URL } from "../constants";
import { apiSlice } from './api_slice';

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: PRODUCTS_URL,
            }),
            keepUnusedDataFor: 5
        })
    }),
});
console.log('productApiSlice');
console.log(productsApiSlice);


export const { useGetProductsQuery } = productsApiSlice;