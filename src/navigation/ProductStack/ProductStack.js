import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Colors from '../../constants/Colors';
import ProductDetailScreen from '../../screens/ProductDetailScreen';
import ProductScreen from '../../screens/ProductScreen';

const ProductStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{
          title: 'Search Products',
          headerStyle: { backgroundColor: Colors.primaryColor },
          headerTintColor: Colors.black,
        }}
      />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default ProductStack;
