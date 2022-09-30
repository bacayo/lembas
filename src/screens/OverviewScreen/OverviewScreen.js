import { View, Text, Image, Linking } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import TopBarView from '../../components/TopBarView';
import styles from './OverviewScreenStyles';
import Colors from '../../constants/Colors';

const OverviewScreen = ({ handleIng, handleOverview, recipe }) => {
  return (
    <View>
      <TopBarView handleIng={handleIng} handleOverview={handleOverview} />
      <Text style={styles.title}>{recipe.title}</Text>
      <Image style={styles.image} source={{ uri: recipe.image }} />
      <Text
        style={styles.source}
        onPress={() => Linking.openURL(recipe.sourceUrl)}>
        by {recipe.sourceName}
      </Text>
      <View style={styles.extraDetails}>
        {/* serving amount */}
        <View style={styles.detailCardContainer}>
          <Icon name="person" size={24} color={Colors.black} />
          <Text style={styles.textInfo}> Serves {recipe.servings}</Text>
        </View>
        {/* ready in * minutes */}
        <View style={styles.detailCardContainer}>
          <Icon name="timer" size={24} color={Colors.black} />
          <Text style={styles.textInfo}>
            {' '}
            Ready in {recipe.readyInMinutes} minutes
          </Text>
        </View>
        {/* Likes */}
        <View style={styles.detailCardContainer}>
          <Icon name="person" size={24} color={Colors.black} />
          <Text style={styles.textInfo}>
            {recipe.aggregateLikes} people like it
          </Text>
        </View>
        {/* price per serving */}
        <View style={styles.detailCardContainer}>
          <Icon name="attach-money" size={24} color={Colors.black} />
          <Text style={styles.textInfo}>
            {(Number(recipe.pricePerServing) / 100).toFixed(2)} per serving
          </Text>
        </View>
      </View>
      <View style={styles.dietsContainer}>
        {recipe.diets?.map(item => (
          <View key={item} style={styles.diet}>
            <Text style={styles.dietTitle}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default OverviewScreen;
