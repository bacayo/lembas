import { View, Text } from 'react-native';
import React from 'react';
import { ProgressBar } from 'react-native-paper';

import { percentOfDailyNeeds, floorNumber } from '../../constants/Constants';
import styles from './NutritionTableStyles';

const NutritionTable = ({ nutrition, color }) => {
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
          progress={percentOfDailyNeeds(nutrition.percentOfDailyNeeds)}
          color={color}
        />
        <Text style={styles.need}>
          {/* {Math.floor(nutrition.percentOfDailyNeeds)}% */}
          {floorNumber(nutrition.percentOfDailyNeeds)}%
        </Text>
      </View>
    </View>
  );
};

export default NutritionTable;
