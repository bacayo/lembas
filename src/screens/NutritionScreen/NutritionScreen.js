import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

import styles from './NutritionScreenStyles';
import NutritionTable from '../../components/NutritionTable';
import Colors from '../../constants/Colors';
import Loading from '../../components/Loading';

const NutritionScreen = ({ recipe, nutrition }) => {
  const { bad, good, nutritionIsLoading } = useSelector(
    state => state.recipeInfoSlice.nutrition,
  );

  const renderBadNutrition = ({ item }) => (
    <NutritionTable nutrition={item} color={Colors.red} />
  );
  const renderGoodNutrition = ({ item }) => (
    <NutritionTable nutrition={item} color={Colors.blue} />
  );

  if (nutritionIsLoading) {
    return <Loading />;
  }

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

      <View style={styles.nutritionContainer}>
        <FlatList
          data={bad}
          renderItem={renderBadNutrition}
          ListHeaderComponent={
            <Text style={[styles.quickview, styles.danger]}>Limit these</Text>
          }
          ListFooterComponent={
            <View>
              <Text style={[styles.quickview, styles.good]}>
                Get Enough Of These
              </Text>
              <FlatList data={good} renderItem={renderGoodNutrition} />
            </View>
          }
        />
      </View>
    </View>
  );
};

export default NutritionScreen;
