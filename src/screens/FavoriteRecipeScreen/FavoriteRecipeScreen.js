import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

import FoodCard from '../../components/FoodCard';
import ScreenNames from '../../constants/ScreenNames';
import styles from './FavoriteRecipeScreenStyles';

const FavoriteRecipeScreen = () => {
  const { favoriteRecipes } = useSelector(state => state.recipeInfoSlice);

  const renderRecipe = ({ item }) => (
    <FoodCard food={item} screen={ScreenNames.recipeInfoScreen} />
  );

  return (
    <View style={styles.container}>
      {favoriteRecipes.length === 0 && (
        <Text style={styles.emptyList}>List is empty</Text>
      )}
      <FlatList data={favoriteRecipes} renderItem={renderRecipe} />
    </View>
  );
};

export default FavoriteRecipeScreen;
