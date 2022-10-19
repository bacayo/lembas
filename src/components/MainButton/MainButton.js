import { Text } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';

import styles from './MainButtonStyles';
import Colors from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from '../../constants/ScreenNames';

const MainButton = ({ icon, text }) => {
  const navigation = useNavigation();

  return (
    <Button
      style={styles.btn}
      buttonColor={Colors.darkBlue}
      textColor={Colors.white}
      icon={icon}
      mode="elevated"
      onPress={() => navigation.navigate(ScreenNames.homeScreen)}>
      <Text>{text}</Text>
    </Button>
  );
};

export default MainButton;
