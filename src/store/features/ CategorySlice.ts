import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit'
import { CategoryData } from '../../data/types/categoryData'
import axios from "axios";



interface CategoryState{
    category: CategoryData[] | null;
    loading: boolean;
    error: any;
}

const initialState : CategoryState = {
    loading: false,
    error: null,
    category: null,
}


export const getCategory = createAsyncThunk(
    "categories/get",
    async (data, thunkApi) => {
        try {
            const response = await axios.get<CategoryData[]>(
                "http://localhost:5214/api/Categories/GetAllKategoriler"
            );
            return response.data;
        } catch (error: any) {
            const message = error.message;
            return thunkApi.rejectWithValue(message);
        }
    }
);

export const CategorySlice = createSlice({
    name: "Category",
    initialState,
    reducers: {
        setCategory: (state, action: PayloadAction<CategoryData[]>)=>{
            state.category=action.payload
        },
        filterCategory: (state, action) => {
            state.category = state.category?.filter(category => category.kategoriId !== action.payload)!;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCategory.pending,(state)=>{
            state.loading = true;
        });
        builder.addCase(getCategory.fulfilled, (state,action)=>{
            state.category = action.payload;
            state.loading = false;
        });
        builder.addCase(getCategory.rejected,(state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
})

export default CategorySlice.reducer;