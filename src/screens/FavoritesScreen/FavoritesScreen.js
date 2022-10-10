import { View, FlatList } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

import styles from './FavoritesScreenStyles';
import FoodCard from '../../components/FoodCard';
import ScreenNames from '../../constants/ScreenNames';

const FavoritesScreen = () => {
  const { favoriteProducts } = useSelector(state => state.productSlice);

  console.log(favoriteProducts);
  const renderFavs = ({ item }) => (
    <FoodCard food={item} screen={ScreenNames.productDetailScreen} />
  );

  return (
    <View style={styles.container}>
      <FlatList data={favoriteProducts} renderItem={renderFavs} />
    </View>
  );
};

export default FavoritesScreen;
