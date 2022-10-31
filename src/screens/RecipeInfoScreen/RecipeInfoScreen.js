import { Text, FlatList, Dimensions, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TabView, TabBar } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';

import { getNutritionByIdAsync, getRecipeInformationAsync } from '../../api';
import INGScreen from '../INGScreen';
import NutritionScreen from '../NutritionScreen';
import OverviewScreen from '../OverviewScreen';
import StepsScreen from '../StepsScreen';
import TipsScreen from '../TipsScreen/TipsScreen';
import WinePairingScreen from '../WinePairingScreen/WinePairingScreen';
import Loading from '../../components/Loading';

import Colors from '../../constants/Colors';
import styles from './RecipeInfoScreenStyles';

const RecipeInfoScreen = props => {
  const { recipe, extendedIng, nutrition, recipeIsLoading } = useSelector(
    state => state.recipeInfoSlice,
  );

  const uniqueIngredients = extendedIng.filter(
    ({ id }, i, _arr) => _arr.findIndex(elem => elem.id === id) === i,
  );

  const [measures, setMeasures] = useState('metric');
  //* routes for tab view
  const [routes] = useState([
    { key: 'overview', title: 'Overview' },
    { key: 'ingredients', title: 'Ingredients' },
    { key: 'steps', title: 'Steps' },
    { key: 'nutrition', title: 'Nutrition' },
    { key: 'wine', title: 'Wine Pairing' },
    { key: 'tips', title: 'Tips' },
  ]);
  //* index for tab view
  const [index, setIndex] = useState(0);

  const dispatch = useDispatch();
  const { id } = props.route.params;
  let isWine;
  const iconSize = 25;

  //* check wine pairing if it is empty or not
  const checkWine = () => {
    if (
      recipe.winePairing !== undefined &&
      Object.keys(recipe.winePairing).length !== 0 &&
      recipe.winePairing.pairedWines.length !== 0
    ) {
      isWine = true;
    } else {
      isWine = false;
    }
  };

  useEffect(() => {
    dispatch(getRecipeInformationAsync(id));
    dispatch(getNutritionByIdAsync(id));
    checkWine();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, id]);

  //* render ingredients in Ingredients tab view => flatlist renderItem property
  const renderIng = ({ item }) => (
    <INGScreen ing={item} measures={measures} setMeasures={setMeasures} />
  );

  //* change measurement us or metric
  const MeasurementButtons = () => (
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
  );

  //* tab view renderScene
  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'overview':
        return <OverviewScreen recipe={recipe} />;
      case 'ingredients':
        return (
          <FlatList
            style={styles.flatlistContainer}
            data={uniqueIngredients}
            renderItem={renderIng}
            ListHeaderComponent={MeasurementButtons}
          />
        );
      case 'steps':
        return <StepsScreen recipe={recipe} />;
      case 'nutrition':
        return <NutritionScreen recipe={recipe} nutrition={nutrition} />;
      case 'wine':
        return isWine ? (
          <WinePairingScreen recipe={recipe} />
        ) : (
          <View style={styles.noWineContainer}>
            <Text style={styles.noWine}>No recommended wine :/</Text>
          </View>
        );
      case 'tips':
        return <TipsScreen recipe={recipe} />;
      default:
        return null;
    }
  };
  //* tab bar icon render
  const getTabBarIcon = iconProps => {
    const { route } = iconProps;
    if (route.key === 'overview') {
      return <Icon name="folder" size={iconSize} color={Colors.gray} />;
    } else if (route.key === 'ingredients') {
      return <Icon name="shopping-cart" size={iconSize} color={Colors.gray} />;
    } else if (route.key === 'steps') {
      return (
        <Icon name="format-align-justify" size={iconSize} color={Colors.gray} />
      );
    } else if (route.key === 'nutrition') {
      return (
        <FontAwesome name="heartbeat" size={iconSize} color={Colors.gray} />
      );
    } else if (route.key === 'tips') {
      return <Icon name="lightbulb" color={Colors.gray} size={iconSize} />;
    } else if (route.key === 'wine') {
      return <Icon name="wine-bar" color={Colors.gray} size={iconSize} />;
    }
  };

  if (recipeIsLoading) {
    return <Loading />;
  }

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: Dimensions.get('window').width }}
      renderTabBar={tabBarProps => (
        <TabBar
          {...tabBarProps}
          scrollEnabled
          indicatorStyle={{ backgroundColor: Colors.white }}
          renderIcon={icon => getTabBarIcon(icon)}
          style={styles.tabBar}
        />
      )}
    />
  );
};

export default RecipeInfoScreen;
