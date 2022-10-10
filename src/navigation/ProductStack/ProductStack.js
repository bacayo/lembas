import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Colors from '../../constants/Colors';
import ProductDetailScreen from '../../screens/ProductDetailScreen';
import ProductScreen from '../../screens/ProductScreen';
import AddFavorite from '../../components/AddFavorite';
import ScreenNames from '../../constants/ScreenNames';

const ProductStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.lightBlue,
        },
        headerTitleStyle: {
          color: Colors.black,
          fontFamily: 'Roboto-Medium',
          fontSize: 20,
        },
      }}>
      <Stack.Screen
        name={ScreenNames.productScreen}
        component={ProductScreen}
        options={{
          title: 'Search Products',
        }}
      />
      <Stack.Screen
        name={ScreenNames.productDetailScreen}
        component={ProductDetailScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerRight: () => <AddFavorite />,
        })}
      />
    </Stack.Navigator>
  );
};

export default ProductStack;
