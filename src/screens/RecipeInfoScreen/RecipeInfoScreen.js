import { View, FlatList, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getNutritionByIdAsync, getRecipeInformationAsync } from '../../api';
import Loading from '../../components/Loading';
import styles from './RecipeInfoScreenStyles';
import TopBarView from '../../components/TopBarView';
import OverviewScreen from '../OverviewScreen';
import INGScreen from '../INGScreen';
import { RadioButton } from 'react-native-paper';
import Colors from '../../constants/Colors';
import StepsScreen from '../StepsScreen';
import NutritionScreen from '../NutritionScreen';
import { resetNutrition } from '../../redux/recipeInfoSlice/recipeInfoSlice';
import WinePairingScreen from '../WinePairingScreen/WinePairingScreen';
import TipsScreen from '../TipsScreen/TipsScreen';

const RecipeInfoScreen = props => {
  const dispatch = useDispatch();

  const { id } = props.route.params;
  const { recipe, recipeIsLoading, extendedIng, nutrition } = useSelector(
    state => state.recipeInfoSlice,
  );

  const [state, setState] = useState('overview');
  //*radio button
  const [measures, setMeasures] = useState('metric');

  const handleIng = () => {
    setState('ing');
  };

  const handleOverview = () => {
    setState('overview');
  };

  const handleSteps = () => {
    setState('steps');
  };

  const handleNutrition = () => {
    setState('nutrition');
    dispatch(resetNutrition());
    dispatch(getNutritionByIdAsync(id));
  };

  const handleWine = () => {
    setState('wine');
  };

  const handleTips = () => {
    setState('tips');
  };

  useEffect(() => {
    dispatch(getRecipeInformationAsync(id));
  }, [dispatch, id]);

  if (recipeIsLoading) {
    return <Loading />;
  }

  //*render ingredients
  const renderIngredients = ({ item }) => (
    <INGScreen ing={item} measures={measures} setMeasures={setMeasures} />
  );

  //* render overview
  if (state === 'overview') {
    return (
      <View style={styles.container}>
        <TopBarView
          handleIng={handleIng}
          handleOverview={handleOverview}
          handleSteps={handleSteps}
          handleNutrition={handleNutrition}
          handleWine={handleWine}
          handleTips={handleTips}
          recipe={recipe}
        />
        <OverviewScreen
          handleIng={handleIng}
          handleOverview={handleOverview}
          recipe={recipe}
        />
      </View>
    );
    //* render ingredients
  } else if (state === 'ing') {
    return (
      <View style={styles.container}>
        <TopBarView
          handleIng={handleIng}
          handleOverview={handleOverview}
          handleSteps={handleSteps}
          handleNutrition={handleNutrition}
          handleWine={handleWine}
          handleTips={handleTips}
          recipe={recipe}
        />
        <View style={styles.radioButtonContainer}>
          <View style={styles.radioBtn}>
            <RadioButton
              value="us"
              status={measures === 'us' ? 'checked' : 'unchecked'}
              onPress={() => setMeasures('us')}
              color={Colors.darkBlue}
            />
            <Text style={styles.radioBtnTitle}>US</Text>
          </View>
          <View style={styles.radioBtn}>
            <RadioButton
              value="metric"
              status={measures === 'metric' ? 'checked' : 'unchecked'}
              onPress={() => setMeasures('metric')}
              color={Colors.darkBlue}
            />
            <Text style={styles.radioBtnTitle}>metric</Text>
          </View>
        </View>
        <FlatList data={extendedIng} renderItem={renderIngredients} />
      </View>
    );
  } else if (state === 'steps') {
    return (
      <View style={styles.container}>
        <TopBarView
          handleIng={handleIng}
          handleOverview={handleOverview}
          handleSteps={handleSteps}
          handleNutrition={handleNutrition}
          handleWine={handleWine}
          handleTips={handleTips}
          recipe={recipe}
        />
        <StepsScreen recipe={recipe} />
      </View>
    );
  } else if (state === 'nutrition') {
    return (
      <View style={styles.container}>
        <TopBarView
          handleIng={handleIng}
          handleOverview={handleOverview}
          handleSteps={handleSteps}
          handleNutrition={handleNutrition}
          handleWine={handleWine}
          handleTips={handleTips}
          recipe={recipe}
        />
        <NutritionScreen recipe={recipe} nutrition={nutrition} />
      </View>
    );
  } else if (state === 'wine') {
    return (
      <View style={styles.container}>
        <TopBarView
          handleIng={handleIng}
          handleOverview={handleOverview}
          handleSteps={handleSteps}
          handleNutrition={handleNutrition}
          handleWine={handleWine}
          handleTips={handleTips}
          recipe={recipe}
        />
        <WinePairingScreen recipe={recipe} />
      </View>
    );
  } else if (state === 'tips') {
    return (
      <View>
        <TopBarView
          handleIng={handleIng}
          handleOverview={handleOverview}
          handleSteps={handleSteps}
          handleNutrition={handleNutrition}
          handleWine={handleWine}
          handleTips={handleTips}
          recipe={recipe}
        />
        <TipsScreen recipe={recipe} />
      </View>
    );
  }
};

export default RecipeInfoScreen;
