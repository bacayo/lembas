import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Colors from '../../constants/Colors';
import ProductDetailScreen from '../../screens/ProductDetailScreen';
import ProductScreen from '../../screens/ProductScreen';

const ProductStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: Colors.black,
          fontFamily: 'Roboto-Medium',
          fontSize: 20,
        },
      }}>
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{
          title: 'Search Products',
        }}
      />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
    </Stack.Navigator>
  );
};

export default ProductStack;
