import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

import styles from './NutritionScreenStyles';
import NutritionTable from '../../components/NutritionTable';
import Colors from '../../constants/Colors';
import ChipCard from '../../components/ChipCard/ChipCard';

const NutritionScreen = ({ recipe, nutrition }) => {
  const { bad, good } = useSelector(state => state.recipeInfoSlice.nutrition);

  const renderBadNutrition = ({ item }) => (
    <NutritionTable nutrition={item} color={Colors.red} />
  );
  const renderGoodNutrition = ({ item }) => (
    <NutritionTable nutrition={item} color={Colors.blue} />
  );

  const strings = {
    calories: ' calories',
    carbs: ' carbs',
    protein: ' protein',
    fat: ' fat',
    healthScore: '% health score',
  };

  return (
    <View style={styles.container}>
      {/* overview */}
      <Text style={styles.heading}>Nutrition per Serving</Text>
      <Text style={styles.quickview}>QuickView</Text>
      <View style={styles.chipContainer}>
        {/* <View style={styles.chip}>
          <Text style={styles.chipTitle}>
            {nutrition.nutrition.calories} Calories
          </Text>
        </View> */}
        <ChipCard
          item={nutrition.nutrition.calories}
          string={strings.calories}
        />
        <ChipCard item={nutrition.nutrition.protein} string={strings.protein} />
        <ChipCard item={nutrition.nutrition.fat} string={strings.fat} />
        <ChipCard item={nutrition.nutrition.carbs} string={strings.carbs} />
        <ChipCard item={recipe.healthScore} string={strings.healthScore} />
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
            <View style={styles.footerContainer}>
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
