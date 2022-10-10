import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FavoritesScreen from '../../screens/FavoritesScreen';
import Colors from '../../constants/Colors';
import ScreenNames from '../../constants/ScreenNames';

const ProfileStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontFamily: 'Roboto-Medium',
          fontSize: 20,
          color: Colors.black,
        },
      }}>
      <Stack.Screen
        name={ScreenNames.favoritesScreen}
        component={FavoritesScreen}
        options={{
          title: 'My Favorite Products',
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
