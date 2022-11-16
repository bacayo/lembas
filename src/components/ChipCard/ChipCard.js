import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Chip } from 'react-native-paper';
import Colors from '../../constants/Colors';

const ChipCard = ({ item, string }) => {
  return (
    <View style={styles.container}>
      <Chip style={styles.chip} mode="outlined" selectedColor={Colors.black}>
        <Text style={styles.title}>
          {item}
          {string}
        </Text>
      </Chip>
    </View>
  );
};

const styles = StyleSheet.create({
  chip: {
    backgroundColor: Colors.white,
  },
  container: {
    margin: 5,
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
  },
});

export default ChipCard;
