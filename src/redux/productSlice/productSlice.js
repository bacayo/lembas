import { createSlice } from '@reduxjs/toolkit';
import { getProductInfoAsync, getProductsAsync } from '../../api';

const productSlice = createSlice({
  name: 'productSlice',
  initialState: {
    productIsLoading: false,
    error: null,
    product: [],
    productInfo: [],
    favoriteProducts: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.favoriteProducts.push(state.productInfo);
    },
    removeFromFavorites: (state, action) => {
      console.log(state.favoriteProducts);
    },
  },
  extraReducers: {
    [getProductsAsync.pending]: state => {
      state.productIsLoading = true;
    },
    [getProductsAsync.fulfilled]: (state, action) => {
      state.productIsLoading = false;
      state.product = action.payload.products;
    },
    [getProductsAsync.rejected]: (state, action) => {
      state.productIsLoading = false;
      state.error = action.error.message;
    },
    [getProductInfoAsync.pending]: state => {
      state.productIsLoading = true;
    },
    [getProductInfoAsync.fulfilled]: (state, action) => {
      state.productIsLoading = false;
      state.productInfo = action.payload;
    },
    [getProductInfoAsync.rejected]: (state, action) => {
      state.productIsLoading = false;
      state.error = action.error.message;
    },
  },
});

export default productSlice.reducer;
export const { addToFavorites } = productSlice.actions;
