import React from 'react';
import { IconButton } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import Colors from '../../constants/Colors';
import { addToFavorites } from '../../redux/productSlice/productSlice';

const AddFavorite = () => {
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(addToFavorites());
  };

  return (
    <IconButton
      icon="favorite-border"
      iconColor={Colors.red}
      size={30}
      onPress={handleFavorite}
    />
  );
};

export default AddFavorite;
