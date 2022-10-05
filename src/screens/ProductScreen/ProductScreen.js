import { View } from 'react-native';
import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';

import styles from './ProductScreenStyles';

const ProductScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  console.log(searchQuery);

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        icon="search"
        elevation={5}
      />
    </View>
  );
};

export default ProductScreen;
