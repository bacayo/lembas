import { View } from 'react-native';
import React from 'react';
import { Searchbar } from 'react-native-paper';

import Colors from '../../constants/Colors';
import styles from './SearchBarStyles';

const SearchBar = ({
  value,
  onChangeText,
  placeholder,
  onSubmitEditing,
  onIconPress,
}) => {
  return (
    <View>
      <Searchbar
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        onSubmitEditing={onSubmitEditing}
        onIconPress={onIconPress}
        elevation={4}
        iconColor={Colors.blue}
        inputStyle={styles.inputStyle}
        style={styles.searchbar}
        placeholderTextColor={Colors.blue}
      />
    </View>
  );
};

export default SearchBar;
