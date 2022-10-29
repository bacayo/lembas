import { useRoute } from '@react-navigation/native';
import React from 'react';
import { IconButton } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import Colors from '../../constants/Colors';
import ScreenNames from '../../constants/ScreenNames';
import { addToFavorites } from '../../redux/productSlice/productSlice';
import { addFavoriteRecipe } from '../../redux/recipeInfoSlice/recipeInfoSlice';

const AddFavorite = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  console.log(route.name);

  const handleFavorite = () => {
    if (route.name === ScreenNames.productDetailScreen) {
      dispatch(addToFavorites());
    } else {
      dispatch(addFavoriteRecipe());
    }
  };

  return (
    <IconButton
      icon="cards-heart"
      iconColor={Colors.red}
      size={30}
      onPress={handleFavorite}
    />
  );
};

export default AddFavorite;
