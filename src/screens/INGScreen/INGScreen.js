import { View, Text, Image } from 'react-native';
import React from 'react';

import styles from './INGScreenStyles';

const INGScreen = ({ ing, measures, setMeasures }) => {
  const imageURL = 'https://spoonacular.com/cdn/ingredients_100x100/';

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: imageURL + ing.image }} />
      <Text style={styles.ingredients}>
        {measures === 'us'
          ? Math.floor(ing.measures.us.amount)
          : Math.floor(ing.measures.metric.amount)}{' '}
        {measures === 'us'
          ? ing.measures.us.unitLong
          : ing.measures.metric.unitLong}{' '}
        {ing.name}
      </Text>
    </View>
  );
};

export default INGScreen;
