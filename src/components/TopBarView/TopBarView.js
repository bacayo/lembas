import { View, Text, ScrollView, Pressable } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './TopBarViewStyles';
import Colors from '../../constants/Colors';

const TopBarView = ({ handleOverview, handleIng }) => {
  const iconSize = 35;

  return (
    <View style={styles.scrollview}>
      <ScrollView
        style={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}>
        <Pressable onPress={handleOverview} style={styles.innerContainer}>
          <Icon name="folder" color={Colors.darkBlue} size={iconSize} />
          <Text style={styles.title}>Overview</Text>
        </Pressable>
        <Pressable onPress={handleIng} style={styles.innerContainer}>
          <Icon name="shopping-cart" color={Colors.darkBlue} size={iconSize} />
          <Text style={styles.title}>Ingredients</Text>
        </Pressable>
        <View style={styles.innerContainer}>
          <Icon
            name="format-align-justify"
            color={Colors.darkBlue}
            size={iconSize}
          />
          <Text style={styles.title}>Steps</Text>
        </View>
        <View style={styles.innerContainer}>
          <FontAwesome
            name="heartbeat"
            color={Colors.darkBlue}
            size={iconSize}
          />
          <Text style={styles.title}>Nutrition</Text>
        </View>
        <View style={styles.innerContainer}>
          <Icon name="wine-bar" color={Colors.darkBlue} size={iconSize} />
          <Text style={styles.title}>Wine Pairing</Text>
        </View>
        <View style={styles.innerContainer}>
          <Icon name="lightbulb" color={Colors.darkBlue} size={iconSize} />
          <Text style={styles.title}>Tips</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default TopBarView;
