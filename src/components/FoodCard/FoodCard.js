import { Text, Pressable, ImageBackground, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import styles from './FoodCardStyles';

const FoodCard = ({ food, screen }) => {
  const navigation = useNavigation();

  const navigateRecipeInfo = () => {
    navigation.navigate(screen, { id: food.id, title: food.title });
  };

  return (
    <Pressable onPress={navigateRecipeInfo} style={styles.container}>
      <ImageBackground source={{ uri: food.image }} style={styles.image}>
        <View style={styles.test}>
          <Text style={styles.text}>{food.title}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default FoodCard;
