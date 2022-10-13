import { View, FlatList, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

import styles from './FavoritesScreenStyles';
import FoodCard from '../../components/FoodCard';
import ScreenNames from '../../constants/ScreenNames';

const FavoritesScreen = () => {
  const { favoriteProducts } = useSelector(state => state.productSlice);

  const renderFavs = ({ item }) => (
    <FoodCard food={item} screen={ScreenNames.productDetailScreen} />
  );

  return (
    <View style={styles.container}>
      {favoriteProducts.length === 0 && (
        <Text style={styles.emptyList}>List is Empty</Text>
      )}
      <FlatList data={favoriteProducts} renderItem={renderFavs} />
    </View>
  );
};

export default FavoritesScreen;
