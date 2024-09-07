import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/Auth/authSlice';
import categorySlice from './features/Category/categorySlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        category: categorySlice
    },
});

export default store;
