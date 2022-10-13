import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchRecipeScreen from '../../screens/SearchRecipeScreen/';
import Colors from '../../constants/Colors';

const RecipeStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchRecipeScreen"
        component={SearchRecipeScreen}
        options={{
          title: 'Search Recipe',
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

export default RecipeStack;
