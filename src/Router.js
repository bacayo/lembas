import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './navigation/HomeStack/HomeStack';
import RecipeStack from './navigation/RecipeStack/RecipeStack';
import ProductStack from './navigation/ProductStack/ProductStack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from './constants/Colors';

const Router = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarIcon: () => <Icon name="home" size={30} color={Colors.blue} />,
          tabBarLabelStyle: {
            fontFamily: 'Roboto-Medium',
            fontSize: 12,
          },
          tabBarStyle: {
            backgroundColor: Colors.lightBlue,
          },
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            headerShown: false,
            title: 'Home',
          }}
        />
        <Tab.Screen
          name="ProductStack"
          component={ProductStack}
          options={{ headerShown: false, title: 'Product' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
