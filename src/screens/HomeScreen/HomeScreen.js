import { View, FlatList, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getRandomRecipeAsync } from '../../api';
import styles from './HomeScreenStyles';
import FoodCard from '../../components/FoodCard/FoodCard';
import Loading from '../../components/Loading';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const { recipes, isLoading } = useSelector(state => state.randomRecipeSlice);

  const renderRecipe = ({ item }) => (
    <FoodCard food={item} screen={'RecipeInfoScreen'} />
  );

  useEffect(() => {
    dispatch(getRandomRecipeAsync());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        renderItem={renderRecipe}
        ListHeaderComponent={() => (
          <Text style={styles.header}>Popular Recipes</Text>
        )}
      />
    </View>
  );
};

export default HomeScreen;
