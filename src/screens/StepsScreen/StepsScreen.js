import { ScrollView, Dimensions } from 'react-native';
import React from 'react';
import RenderHTML, { defaultSystemFonts } from 'react-native-render-html';

import styles from './StepsScreenStyles';

const StepsScreen = ({ recipe }) => {
  const source = {
    html: recipe?.instructions,
  };

  const systemFonts = [...defaultSystemFonts, 'Roboto-Regular'];

  const tagsStyles = {
    body: {
      color: '#000',
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
    },
  };

  const width = Dimensions.get('window').width;

  return (
    <ScrollView style={styles.container}>
      <RenderHTML
        source={source}
        contentWidth={width}
        tagsStyles={tagsStyles}
        systemFonts={systemFonts}
      />
    </ScrollView>
  );
};

export default StepsScreen;
