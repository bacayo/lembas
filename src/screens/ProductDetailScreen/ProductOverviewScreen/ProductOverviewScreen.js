import { View, Text, Image } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

import styles from './ProductOverviewScreenStyles';

const ProductOverviewScreen = () => {
  const { productInfo } = useSelector(state => state.productSlice);

  return (
    <View style={styles.container}>
      <Text style={styles.productTitle}>{productInfo.title}</Text>
      <Image style={styles.image} source={{ uri: productInfo.image }} />
      <View style={styles.infoContainer}>
        <View style={styles.infoCard}>
          <Text style={styles.info}>
            {productInfo.nutrition?.calories} calories
          </Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.info}>
            {productInfo.nutrition?.protein} protein
          </Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.info}>{productInfo.nutrition?.fat} fat</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.info}>{productInfo.nutrition?.carbs} carbs</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductOverviewScreen;
