import { Text } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';

import styles from './MainButtonStyles';
import Colors from '../../constants/Colors';

const MainButton = ({ icon, text, onPress }) => {
  return (
    <Button
      style={styles.btn}
      buttonColor={Colors.darkBlue}
      textColor={Colors.white}
      icon={icon}
      mode="elevated"
      onPress={onPress}>
      <Text>{text}</Text>
    </Button>
  );
};

export default MainButton;
