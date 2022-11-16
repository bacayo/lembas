import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import randomRecipeSlice from './randomRecipe/randomRecipeSlice';
import recipeInfoSlice from './recipeInfoSlice/recipeInfoSlice';
import productSlice from './productSlice/productSlice';
import recipeSlice from './recipeInfoSlice/recipeSlice';
import userSlice from './userSlice/userSlice';

const store = configureStore({
  reducer: {
    randomRecipeSlice,
    recipeInfoSlice,
    productSlice,
    recipeSlice,
    // userSlice,
  },
  middleware: applyMiddleware => applyMiddleware().concat(logger),
});

export default store;
