import { createSlice } from '@reduxjs/toolkit';
import { getRecipeInformationAsync } from '../../api';

const recipeInfoSlice = createSlice({
  name: 'recipeInfoSlice',
  initialState: {
    recipeIsLoading: false,
    error: null,
    recipe: [],
    extendedIng: [],
  },
  extraReducers: {
    [getRecipeInformationAsync.pending]: state => {
      state.recipeIsLoading = true;
    },
    [getRecipeInformationAsync.fulfilled]: (state, action) => {
      state.recipeIsLoading = false;
      state.recipe = action.payload;
      state.extendedIng = action.payload.extendedIngredients;
    },
    [getRecipeInformationAsync.rejected]: (state, action) => {
      state.recipeIsLoading = false;
      state.error = action.error.message;
    },
  },
});

export default recipeInfoSlice.reducer;
