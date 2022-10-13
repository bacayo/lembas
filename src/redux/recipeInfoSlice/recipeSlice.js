import { createSlice } from '@reduxjs/toolkit';
import { searchRecipeAsync } from '../../api';

const initialState = {
  recipeIsLoading: false,
  recipe: [],
  error: null,
};

const recipeSlice = createSlice({
  name: 'recipeSlice',
  initialState,
  extraReducers: {
    [searchRecipeAsync.pending]: state => {
      state.recipeIsLoading = true;
    },
    [searchRecipeAsync.fulfilled]: (state, action) => {
      state.recipeIsLoading = false;
      state.recipe = action.payload.results;
    },
    [searchRecipeAsync.rejected]: (state, action) => {
      state.recipeIsLoading = false;
      state.error = action.error.message;
    },
  },
});

export default recipeSlice.reducer;
