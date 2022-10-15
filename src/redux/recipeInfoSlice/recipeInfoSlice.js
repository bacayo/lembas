import { createSlice } from '@reduxjs/toolkit';
import { getRecipeInformationAsync, getNutritionByIdAsync } from '../../api';

const recipeInfoSlice = createSlice({
  name: 'recipeInfoSlice',
  initialState: {
    recipeIsLoading: false,
    error: null,
    recipe: [],
    favoriteRecipes: [],
    extendedIng: [],
    nutrition: {
      nutritionIsLoading: false,
      nutrition: [],
      good: [],
      bad: [],
    },
  },
  reducers: {
    resetNutrition: (state, action) => {
      state.nutrition.bad = [];
    },
    addFavoriteRecipe: (state, action) => {
      state.favoriteRecipes.push(state.recipe);
    },
    removeFavoriteRecipe: (state, action) => {
      const index = state.favoriteRecipes
        .map(item => item.id)
        .indexOf(action.payload);

      state.favoriteRecipes.splice(index, 1);
    },
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
    [getNutritionByIdAsync.pending]: state => {
      state.nutrition.nutritionIsLoading = true;
    },
    [getNutritionByIdAsync.fulfilled]: (state, action) => {
      state.nutrition.nutritionIsLoading = false;
      state.nutrition.nutrition = action.payload;
      state.nutrition.bad = action.payload.bad;
      state.nutrition.good = action.payload.good;
    },
    [getNutritionByIdAsync.rejected]: (state, action) => {
      state.nutrition.nutritionIsLoading = false;
      state.recipeIsLoading = false;
      state.error = action.error.message;
    },
  },
});

export default recipeInfoSlice.reducer;
export const { resetNutrition, addFavoriteRecipe, removeFavoriteRecipe } =
  recipeInfoSlice.actions;
