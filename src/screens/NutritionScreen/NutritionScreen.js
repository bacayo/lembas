import { View, Text, FlatList } from 'react-native';
import React from 'react';

import styles from './NutritionScreenStyles';
import { useSelector } from 'react-redux';
import NutritionTable from '../../components/NutritionTable/NutritionTable';

const NutritionScreen = ({ recipe, good, nutrition }) => {
  const { bad } = useSelector(state => state.recipeInfoSlice.nutrition);

  const renderNutrition = ({ item }) => <NutritionTable nutrition={item} />;

  return (
    <View style={styles.container}>
      {/* overview */}
      <Text style={styles.heading}>Nutrition per Serving</Text>
      <Text style={styles.quickview}>QuickView</Text>
      <View style={styles.chipContainer}>
        <View style={styles.chip}>
          <Text style={styles.chipTitle}>
            {nutrition.nutrition.calories} Calories
          </Text>
        </View>
        <View style={styles.chip}>
          <Text style={styles.chipTitle}>
            {nutrition.nutrition.protein} Protein
          </Text>
        </View>
        <View style={styles.chip}>
          <Text style={styles.chipTitle}>
            {nutrition.nutrition.fat} Total Fat
          </Text>
        </View>
        <View style={styles.chip}>
          <Text style={styles.chipTitle}>
            {nutrition.nutrition.carbs} Carbs
          </Text>
        </View>
        <View style={styles.chip}>
          <Text style={styles.chipTitle}>
            {recipe.healthScore}% health score
          </Text>
        </View>
      </View>
      {/* end of overview */}
      <Text style={[styles.quickview, styles.danger]}>Limit these</Text>
      <View style={styles.nutritionContainer}>
        <FlatList data={bad} renderItem={renderNutrition} />
      </View>
    </View>
  );
};

export default NutritionScreen;
