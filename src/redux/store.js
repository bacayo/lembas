import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import randomRecipeSlice from './randomRecipe/randomRecipeSlice';
import recipeInfoSlice from './recipeInfoSlice/recipeInfoSlice';
import productSlice from './productSlice/productSlice';
import recipeSlice from './recipeInfoSlice/recipeSlice';

const store = configureStore({
  reducer: {
    randomRecipeSlice,
    recipeInfoSlice,
    productSlice,
    recipeSlice,
  },
  middleware: applyMiddleware => applyMiddleware().concat(logger),
});

export default store;
