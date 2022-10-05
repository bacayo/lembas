import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RecipeStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Recipe" component={null} />
    </Stack.Navigator>
  );
};

export default RecipeStack;
