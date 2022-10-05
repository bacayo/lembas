import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductScreen from '../../screens/ProductScreen';
import Colors from '../../constants/Colors';

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
    </Stack.Navigator>
  );
};

export default ProductStack;
