import React from 'react';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './navigation/HomeStack/HomeStack';
import ProductStack from './navigation/ProductStack/ProductStack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from './constants/Colors';
import ProfileStack from './navigation/ProfileStack/ProfileStack';
import RecipeStack from './navigation/RecipeStack/RecipeStack';
import ScreenNames from './constants/ScreenNames';

const Router = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: Colors.lightBlue,
          },

          tabBarLabelStyle: {
            fontFamily: 'Roboto-Medium',
            fontSize: 12,
          },
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            // color = Colors.darkBlue;
            if (route.name === 'HomeStack') {
              iconName = 'home';
            } else if (route.name === 'ProductStack') {
              iconName = 'list';
            } else if (route.name === 'ProfileStack') {
              iconName = 'account-circle';
            } else if (route.name === 'RecipeStack') {
              iconName = 'local-pizza';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: Colors.red,
          tabBarInactiveTintColor: Colors.darkBlue,
        })}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            headerShown: false,
            title: 'Home',
          }}
        />
        <Tab.Screen
          name="RecipeStack"
          component={RecipeStack}
          options={{ title: 'Recipe', headerShown: false }}
        />
        <Tab.Screen
          name="ProductStack"
          component={ProductStack}
          options={{ headerShown: false, title: 'Product' }}
        />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{ headerShown: false, title: 'Profile' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
