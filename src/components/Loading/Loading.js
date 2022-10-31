import React from 'react';
import Lottie from 'lottie-react-native';
import { View, StyleSheet } from 'react-native';

const Loading = () => {
  return (
    <View style={styles.container}>
      <Lottie
        style={styles.lottie}
        source={require('../../../assets/448-ripple-loading-animation.json')}
        autoPlay={true}
        loop={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  lottie: {
    alignSelf: 'center',
    height: 200,
    width: 200,
  },
});

export default Loading;
