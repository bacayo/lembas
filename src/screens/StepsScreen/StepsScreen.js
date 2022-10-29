import { View } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';

import styles from './StepsScreenStyles';

const StepsScreen = ({ recipe }) => {
  const source = {
    html: recipe?.instructions,
  };

  return (
    <View style={styles.container}>
      <WebView source={source} minimumFontSize={45} style={styles.html} />
    </View>
  );
};

export default StepsScreen;
