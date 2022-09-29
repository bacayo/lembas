import { createSlice } from '@reduxjs/toolkit';
import { getRandomRecipeAsync } from '../../api';

const randomRecipeSlice = createSlice({
  name: 'randomRecipeSlice',
  initialState: {
    isLoading: false,
    recipes: [],

    error: null,
  },
  extraReducers: {
    [getRandomRecipeAsync.pending]: state => {
      state.isLoading = true;
    },
    [getRandomRecipeAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.recipes = action.payload.recipes;
    },
    [getRandomRecipeAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default randomRecipeSlice.reducer;
