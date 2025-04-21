import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/api_slice';
import cartSliceReducre from './slices/cart_slice';
import authSliceReducer from './slices/auth_slice';

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        cart: cartSliceReducre,
        auth: authSliceReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});

export default store;