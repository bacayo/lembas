import React from 'react';
import { TextInput } from 'react-native-paper';

import styles from './InputCardStyles';
import Colors from '../../constants/Colors';

const InputCard = ({
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  icon,
}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#a3a8b1"
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChangeText}
      mode={'outlined'}
      left={<TextInput.Icon iconColor={Colors.darkBlue} icon={icon} />}
    />
  );
};

export default InputCard;
