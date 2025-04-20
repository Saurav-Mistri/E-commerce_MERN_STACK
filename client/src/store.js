import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/api_slice';
import cartSliceReducre from './slices/cart_slice';

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        cart: cartSliceReducre,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});

export default store;