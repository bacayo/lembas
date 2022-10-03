import { View, Text } from 'react-native';
import React from 'react';
import { ProgressBar } from 'react-native-paper';

import styles from './NutritionTableStyles';
import Colors from '../../constants/Colors';

const NutritionTable = ({ nutrition }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{nutrition.title}</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.amount}>{nutrition.amount}</Text>
      </View>
      <View style={styles.bar}>
        <ProgressBar
          style={styles.progressBar}
          progress={nutrition.percentOfDailyNeeds / 100}
          color={Colors.red}
        />
        <Text style={styles.need}>
          {Math.floor(nutrition.percentOfDailyNeeds)}%
        </Text>
      </View>
    </View>
  );
};

export default NutritionTable;