import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../screens/HomeScreen';
import INGScreen from '../../screens/INGScreen';
import RecipeInfoScreen from '../../screens/RecipeInfoScreen';
import Colors from '../../constants/Colors';
import AddFavorite from '../../components/AddFavorite';
import ScreenNames from '../../constants/ScreenNames';
import LoginScreen from '../../screens/LoginScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const HomeStack = ({ navigation, route }) => {
  const Stack = createNativeStackNavigator();
  React.useEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);

    //! why routename returns undefined first start of the app
    if (routeName === 'LoginScreen' || routeName === undefined) {
      console.log(routeName);
      navigation.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      navigation.setOptions({
        tabBarStyle: {
          backgroundColor: Colors.lightBlue,
          marginHorizontal: 10,
          bottom: 10,
          borderRadius: 5,
          elevation: 5,
        },
      });
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator
      screenOptions={{ headerTitleStyle: { fontFamily: 'Roboto-Medium' } }}>
      <Stack.Screen
        name={ScreenNames.loginScreen}
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
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
    </Stack.Navigator>
  );
};

export default HomeStack;
