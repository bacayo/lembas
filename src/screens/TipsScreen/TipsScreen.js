import { View } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';

import styles from './TipsScreenStyle';

const TipsScreen = ({ recipe }) => {
  const source = {
    html: recipe.summary,
  };

  return (
    <View style={styles.container}>
      <WebView source={source} minimumFontSize={45} style={styles.html} />
    </View>
  );
};

export default TipsScreen;
