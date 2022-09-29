import { Text, Pressable, ImageBackground, View } from 'react-native';
import React from 'react';

import styles from './FoodCardStyles';
import { useNavigation } from '@react-navigation/native';

const FoodCard = ({ food }) => {
  const navigation = useNavigation();

  const navigateRecipeInfo = () => {
    navigation.navigate('RecipeInfoScreen', { id: food.id, title: food.title });
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
