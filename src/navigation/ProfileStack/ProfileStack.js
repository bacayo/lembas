import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FavoritesScreen from '../../screens/FavoritesScreen';
import Colors from '../../constants/Colors';
import ScreenNames from '../../constants/ScreenNames';
import ProfileScreen from '../../screens/ProfileScreen';
import FavoriteRecipeScreen from '../../screens/FavoriteRecipeScreen';

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
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen
        name={ScreenNames.favoriteRecipe}
        component={FavoriteRecipeScreen}
        options={{
          title: 'My Favorite Recipes',
          headerTitleStyle: {
            color: Colors.black,
            fontFamily: 'Roboto-Medium',
          },
          headerStyle: {
            backgroundColor: Colors.primaryColor,
          },
        }}
      />
      <Stack.Screen
        name={ScreenNames.favoritesScreen}
        component={FavoritesScreen}
        options={{
          title: 'My Favorite Products',
          headerTitleStyle: {
            color: Colors.black,
            fontFamily: 'Roboto-Medium',
          },
          headerStyle: {
            backgroundColor: Colors.primaryColor,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
