import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import React from 'react';

import styles from './WinePairingScreenStyles';

const WinePairingScreen = ({ recipe }) => {
  const productMatches = recipe.winePairing.productMatches[0];

  const handleWineLink = () => {
    Linking.openURL(productMatches.link);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.wineText}>{recipe.winePairing.pairingText}</Text>
      <View style={styles.wineContainer}>
        <Image
          style={styles.wineImage}
          source={{ uri: productMatches.imageUrl }}
        />
        <Text style={styles.title}>{productMatches.title}</Text>
        <Text style={styles.description}>{productMatches.description}</Text>
      </View>
      <TouchableOpacity onPress={handleWineLink} style={styles.linkBtn}>
        <Text style={styles.linkBtnTitle}>Buy for {productMatches.price}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WinePairingScreen;
