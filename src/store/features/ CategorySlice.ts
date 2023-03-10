import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit'
import { CategoryData } from '../../data/types/categoryData'
import axios from "axios";

export const getCategory = createAsyncThunk(
    "categories/getCategory",
    async (data, thunkApi) => {
        try {
            const response = await axios.get<CategoryData[]>(
                "http://localhost:44370/api/Categories/GetAllKategoriler"
            );
            return response.data;
        } catch (error: any) {
            const message = error.message;
            return thunkApi.rejectWithValue(message);
        }
    }
);

interface CategorySlice{
    loading: boolean;
    error: string | null;
    data: CategoryData[] | null;
}

const initialState = {
    loading: false,
    error: null,
    data: null,
} as CategorySlice;

const CategorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getCategory.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getCategory.fulfilled, (state, action: PayloadAction<CategoryData[]>) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getCategory.rejected, (state, action: PayloadAction<any>) => {
                state.error = action.payload;
            });
    },
});

export default CategorySlice.reducer;