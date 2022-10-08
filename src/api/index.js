import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { URLSearchParams } from 'react-native-url-polyfill';

const BASE_URL = 'https://api.spoonacular.com';
const API_KEY = 'df6806d558214d1590f5dbc63e570138';
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers['X-API-KEY'] = API_KEY;
axios.defaults.headers['Content-Type'] = 'application/json';

export const getRandomRecipeAsync = createAsyncThunk(
  'randomRecipeSlice/getRandomRecipeAsync',
  async thunkAPI => {
    const params = new URLSearchParams();
    params.append('number', 10);

    const response = await axios.get('recipes/random', { params });
    return response.data;
  },
);

export const getRecipeInformationAsync = createAsyncThunk(
  'recipeInfoSlice/getRecipeInformationAsync',
  async id => {
    const response = await axios.get(`recipes/${id}/information`);
    return response.data;
  },
);

export const getNutritionByIdAsync = createAsyncThunk(
  'recipeInfoSlice/getNutritionByIdAsync',
  async id => {
    const response = await axios.get(`recipes/${id}/nutritionWidget.json`);
    return response.data;
  },
);

export const getProductsAsync = createAsyncThunk(
  'productSlice/getProductsAsync',
  async data => {
    const params = new URLSearchParams();
    params.append('query', data.query);
    params.append('number', data.number);
    const response = await axios.get('food/products/search', { params });
    return response.data;
  },
);

export const getProductInfoAsync = createAsyncThunk(
  'productSlice/getProductInfoAsync',
  async id => {
    const response = await axios.get(`food/products/${id}`);
    return response.data;
  },
);
