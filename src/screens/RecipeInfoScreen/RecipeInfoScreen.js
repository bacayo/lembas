import { View, FlatList, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getRecipeInformationAsync } from '../../api';
import Loading from '../../components/Loading';
import styles from './RecipeInfoScreenStyles';

import TopBarView from '../../components/TopBarView';
import OverviewScreen from '../OverviewScreen';
import INGScreen from '../INGScreen';

const RecipeInfoScreen = props => {
  const dispatch = useDispatch();

  const { id } = props.route.params;
  const { recipe, recipeIsLoading, extendedIng } = useSelector(
    state => state.recipeInfoSlice,
  );

  const [state, setState] = useState('overview');

  const handleIng = () => {
    setState('ing');
  };

  const handleOverview = () => {
    setState('overview');
  };

  useEffect(() => {
    dispatch(getRecipeInformationAsync(id));
  }, [dispatch, id]);

  if (recipeIsLoading) {
    return <Loading />;
  }

  //*render ingredients
  const renderIngredients = ({ item }) => <INGScreen ing={item} />;

  //* overview
  if (state === 'overview') {
    return (
      <View style={styles.container}>
        <OverviewScreen
          handleIng={handleIng}
          handleOverview={handleOverview}
          recipe={recipe}
        />
      </View>
    );
    //* ingredients
  } else if (state === 'ing') {
    return (
      <View style={styles.container}>
        <TopBarView handleIng={handleIng} handleOverview={handleOverview} />
        <Text>us or metric</Text>
        <FlatList data={extendedIng} renderItem={renderIngredients} />
      </View>
    );
  }
};

export default RecipeInfoScreen;
