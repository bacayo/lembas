import { FlatList, Keyboard, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Searchbar, ActivityIndicator, MD2Colors } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import styles from './ProductScreenStyles';
import { getProductsAsync } from '../../api';
import FoodCard from '../../components/FoodCard/FoodCard';

const ProductScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [limit, setLimit] = useState(10);
  const dispatch = useDispatch();

  const { product, productIsLoading } = useSelector(
    state => state.productSlice,
  );

  const searchProducts = () => {
    setLimit(10);
    Keyboard.dismiss();
    dispatch(getProductsAsync({ query: searchQuery, number: limit }));
  };

  const renderProducts = ({ item }) => (
    <FoodCard food={item} screen={'ProductDetailScreen'} />
  );

  const onChangeSearch = query => setSearchQuery(query);

  const loadMoreProducts = () => {
    setLimit(limit + 10);
    dispatch(getProductsAsync({ query: searchQuery, number: limit }));
  };

  // useEffect(() => {
  //   dispatch(getProductsAsync({ query: searchQuery, number: limit }));
  // }, []);

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        icon="search"
        elevation={5}
        onIconPress={() => searchProducts()}
      />
      <FlatList
        data={product}
        renderItem={renderProducts}
        onEndReachedThreshold={0.1}
        onEndReached={loadMoreProducts}
        ListFooterComponent={() =>
          productIsLoading && (
            <ActivityIndicator
              animating={true}
              color={MD2Colors.red800}
              size={'large'}
            />
          )
        }
      />
    </View>
  );
};

export default ProductScreen;
