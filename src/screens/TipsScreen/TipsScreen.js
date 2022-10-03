import { View, useWindowDimensions } from 'react-native';
import React from 'react';
import RenderHTML, { defaultSystemFonts } from 'react-native-render-html';

import Colors from '../../constants/Colors';
import styles from './TipsScreenStyle';

const TipsScreen = ({ recipe }) => {
  const source = {
    html: recipe.summary,
  };
  const systemFonts = [
    ...defaultSystemFonts,
    'Roboto-Regular',
    'Roboto-Medium',
  ];
  const { width } = useWindowDimensions();
  const tagsStyles = {
    body: {
      fontFamily: 'Roboto-Medium',
      fontSize: 16,
      color: Colors.black,
    },
  };

  return (
    <View style={styles.container}>
      <RenderHTML
        source={source}
        contentWidth={width}
        systemFonts={systemFonts}
        tagsStyles={tagsStyles}
      />
    </View>
  );
};

export default TipsScreen;
