import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../screens/HomeScreen';
import INGScreen from '../../screens/INGScreen';
import RecipeInfoScreen from '../../screens/RecipeInfoScreen';
import Colors from '../../constants/Colors';
import AddFavorite from '../../components/AddFavorite';
import ScreenNames from '../../constants/ScreenNames';

const HomeStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{ headerTitleStyle: { fontFamily: 'Roboto-Medium' } }}>
      <Stack.Screen
        name={ScreenNames.homeScreen}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ScreenNames.recipeInfoScreen}
        component={RecipeInfoScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerStyle: { backgroundColor: Colors.lightBlue },
          headerRight: () => <AddFavorite />,
        })}
      />
      <Stack.Screen
        name={ScreenNames.ingredientsScreen}
        component={INGScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
