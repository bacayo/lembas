import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../screens/HomeScreen';
import INGScreen from '../../screens/INGScreen';
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
      <Stack.Screen name="INGScreen" component={INGScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
