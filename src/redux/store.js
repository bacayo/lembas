import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import randomRecipeSlice from './randomRecipe/randomRecipeSlice';
import recipeInfoSlice from './recipeInfoSlice/recipeInfoSlice';

const store = configureStore({
  reducer: {
    randomRecipeSlice,
    recipeInfoSlice,
  },
  middleware: applyMiddleware => applyMiddleware().concat(logger),
});

export default store;
