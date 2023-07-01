import { configureStore } from "@reduxjs/toolkit";
import basketReducer from './features/basketSlice';

export const store = configureStore({

    // reducer: where we combine all of the different slices together
    reducer: {
        basket: basketReducer,
    },
})