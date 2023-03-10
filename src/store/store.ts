import { configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

import ShowcaseProductsSlice from "./features/ShowcaseProductsSlice";
import CategorySlice from "./features/ CategorySlice";


const store = configureStore({
    reducer:{
        showcaseProduct: ShowcaseProductsSlice,
        category: CategorySlice
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState>= useSelector;
