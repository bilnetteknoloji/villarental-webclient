import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CategoryData } from '../../data/types/categoryData';
import {ProductsDTO} from "../../data/types/productsDTO";

interface ProductsState {
    products: CategoryData[];
    status: 'idle' | 'loading' | 'failed';
    loading: boolean;
    error: any;
}

const initialState: ProductsState = {
    products: [],
    status: 'idle',
    loading: false,
    error: null,
};

export const getShowcaseProducts = createAsyncThunk('products/getProducts', async () => {
    const response = await fetch('http://localhost:5214/api/Homes/VitrinUrunleri');
    const data = await response.json();
    // Fiyata göre sıralama
    const sortedData = data.sort((a: ProductsDTO, b: ProductsDTO) => a.fiyat - b.fiyat);
    // Kampanyalı ve en düşük fiyatlı ürünlerden başlayarak sıralama
    const showcaseData = sortedData.filter((product: CategoryData) => product.kategoriId !== 0);
    const remainingData = sortedData.filter((product: CategoryData) => product.kategoriId=== 0);
    showcaseData.push(...remainingData);
    return showcaseData.slice(0, 10);
});

const showcaseProductsSlice = createSlice({
    name: 'showcaseProducts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getShowcaseProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getShowcaseProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.loading = false;
            })
            .addCase(getShowcaseProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });

    },
});

export default showcaseProductsSlice.reducer;
