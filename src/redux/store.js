import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import randomRecipeSlice from './randomRecipe/randomRecipeSlice';
import recipeInfoSlice from './recipeInfoSlice/recipeInfoSlice';
import productSlice from './productSlice/productSlice';

const store = configureStore({
  reducer: {
    randomRecipeSlice,
    recipeInfoSlice,
    productSlice,
  },
  middleware: applyMiddleware => applyMiddleware().concat(logger),
});

export default store;
