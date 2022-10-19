import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { IconButton } from 'react-native-paper';

import Colors from '../../constants/Colors';

const SocialButton = ({ icon }) => {
  return (
    <TouchableOpacity
      onPress={() => console.log('Pressed')}
      style={styles.container}>
      <IconButton icon={icon} iconColor={Colors.darkBlue} size={20} />
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryColor,
    borderColor: Colors.placeholder,
    borderRadius: 10,
    elevation: 1,
    marginHorizontal: 5,
  },
});
