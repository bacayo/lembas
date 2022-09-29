import React from 'react';
import Lottie from 'lottie-react-native';

const Loading = () => {
  return (
    <Lottie
      source={require('../../../assets/448-ripple-loading-animation.json')}
      autoPlay
      loop
    />
  );
};

export default Loading;
