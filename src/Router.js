import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './navigation/HomeStack/HomeStack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from './constants/Colors';

const Router = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarIcon: () => <Icon name="home" size={30} color={Colors.blue} />,
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
