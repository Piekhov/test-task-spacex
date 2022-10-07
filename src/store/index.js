import { configureStore } from "@reduxjs/toolkit";
import dragonReducer from './dragonSlice'

export const store = configureStore ({
    reducer:{
        dragons: dragonReducer,
    },
});