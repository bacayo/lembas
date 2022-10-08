import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

import styles from './ProductIngScreenStyles';

const ProductIngScreen = () => {
  const { productInfo } = useSelector(state => state.productSlice);

  return (
    <View style={styles.container}>
      <Text style={styles.ingredients}>{productInfo?.ingredientList} </Text>
    </View>
  );
};

export default ProductIngScreen;
