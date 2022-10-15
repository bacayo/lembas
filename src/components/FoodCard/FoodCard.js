import { Text, Pressable, ImageBackground, View, Alert } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import styles from './FoodCardStyles';
import ScreenNames from '../../constants/ScreenNames';
import { removeFromFavorites } from '../../redux/productSlice/productSlice';
import { removeFavoriteRecipe } from '../../redux/recipeInfoSlice/recipeInfoSlice';

const FoodCard = ({ food, screen }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  const navigateRecipeInfo = () => {
    navigation.navigate(screen, { id: food.id, title: food.title });
  };

  const handleFavoriteProduct = () => {
    dispatch(removeFromFavorites(food.id));
  };

  const handleRecipeFavorite = () => {
    dispatch(removeFavoriteRecipe(food.id));
  };

  //* This alert will be changed with paper modal
  const removeFav = () => {
    if (route.name === ScreenNames.favoritesScreen) {
      Alert.alert(
        'Delete Product',
        'This will be removed from your favorite list',
        [
          {
            text: 'Cancel',
            onPress: null,
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: handleFavoriteProduct,
          },
        ],
      );

      //*dispatch remove fav products
    } else {
      //* remove fav recipe
      Alert.alert(
        'Delete Recipe',
        'This will be removed from your favorite list',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: handleRecipeFavorite,
          },
        ],
      );
    }
  };

  return (
    <Pressable
      onLongPress={removeFav}
      onPress={navigateRecipeInfo}
      style={styles.container}>
      <ImageBackground source={{ uri: food.image }} style={styles.image}>
        <View style={styles.test}>
          <Text style={styles.text}>{food.title}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default FoodCard;
