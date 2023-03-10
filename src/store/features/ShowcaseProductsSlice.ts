import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CategoryData } from '../../data/types/categoryData';

interface State {
    products: CategoryData[];
    status: 'idle' | 'loading' | 'failed';
}

export const getShowcaseProducts = createAsyncThunk('Homes/VitrinUrunleri', async () => {
    const response = await fetch('baseURL/Homes/VitrinUrunleri');
    const data = await response.json();
    // Fiyata göre sıralama
    const sortedData = data.sort((a: CategoryData, b: CategoryData) => a.products.fiyat - b.products.fiyat);
    // Kampanyalı ve en düşük fiyatlı ürünlerden başlayarak sıralama
    const showcaseData = sortedData.filter((product: CategoryData) => product.products.kampanyaId !== 0);
    const remainingData = sortedData.filter((product: CategoryData) => product.products.kampanyaId === 0);
    showcaseData.push(...remainingData);
    return showcaseData.slice(0, 10);
});

const initialState: State = {
    products: [],
    status: 'idle',
};

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
                state.status = 'idle';
                state.products = action.payload;
            })
            .addCase(getShowcaseProducts.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default showcaseProductsSlice.reducer;
