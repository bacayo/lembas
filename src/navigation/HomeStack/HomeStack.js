import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../screens/HomeScreen';
import RecipeInfoScreen from '../../screens/RecipeInfoScreen';
import Colors from '../../constants/Colors';

const HomeStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecipeInfoScreen"
        component={RecipeInfoScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerStyle: { backgroundColor: Colors.lightBlue },
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
