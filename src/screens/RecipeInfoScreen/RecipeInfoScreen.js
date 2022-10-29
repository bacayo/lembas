// import { View, FlatList, Text } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { getNutritionByIdAsync, getRecipeInformationAsync } from '../../api';
// import Loading from '../../components/Loading';
// import styles from './RecipeInfoScreenStyles';
// import TopBarView from '../../components/TopBarView';
// import OverviewScreen from '../OverviewScreen';
// import INGScreen from '../INGScreen';
// import { RadioButton } from 'react-native-paper';
// import Colors from '../../constants/Colors';
// import StepsScreen from '../StepsScreen';
// import NutritionScreen from '../NutritionScreen';
// import { resetNutrition } from '../../redux/recipeInfoSlice/recipeInfoSlice';
// import WinePairingScreen from '../WinePairingScreen/WinePairingScreen';
// import TipsScreen from '../TipsScreen/TipsScreen';

// const RecipeInfoScreen = props => {
//   const dispatch = useDispatch();

//   const { id } = props.route.params;
//   const { recipe, recipeIsLoading, extendedIng, nutrition } = useSelector(
//     state => state.recipeInfoSlice,
//   );

//   const [state, setState] = useState('overview');
//   //*radio button
//   const [measures, setMeasures] = useState('metric');

//   const handleIng = () => {
//     setState('ing');
//   };

//   const handleOverview = () => {
//     setState('overview');
//   };

//   const handleSteps = () => {
//     setState('steps');
//   };

//   const handleNutrition = () => {
//     setState('nutrition');
//     dispatch(resetNutrition());
//     dispatch(getNutritionByIdAsync(id));
//   };

//   const handleWine = () => {
//     setState('wine');
//   };

//   const handleTips = () => {
//     setState('tips');
//   };

//   useEffect(() => {
//     dispatch(getRecipeInformationAsync(id));
//   }, [dispatch, id]);

//   if (recipeIsLoading) {
//     return <Loading />;
//   }

//   //*render ingredients
//   const renderIngredients = ({ item }) => (
//     <INGScreen ing={item} measures={measures} setMeasures={setMeasures} />
//   );

//   //* render overview
//   if (state === 'overview') {
//     return (
//       <View style={styles.container}>
//         <TopBarView
//           handleIng={handleIng}
//           handleOverview={handleOverview}
//           handleSteps={handleSteps}
//           handleNutrition={handleNutrition}
//           handleWine={handleWine}
//           handleTips={handleTips}
//           recipe={recipe}
//         />
//         <OverviewScreen
//           handleIng={handleIng}
//           handleOverview={handleOverview}
//           recipe={recipe}
//         />
//       </View>
//     );
//     //* render ingredients
//   } else if (state === 'ing') {
//     return (
//       <View style={styles.container}>
//         <TopBarView
//           handleIng={handleIng}
//           handleOverview={handleOverview}
//           handleSteps={handleSteps}
//           handleNutrition={handleNutrition}
//           handleWine={handleWine}
//           handleTips={handleTips}
//           recipe={recipe}
//         />
//         <View style={styles.radioButtonContainer}>
//           <View style={styles.radioBtn}>
//             <RadioButton
//               value="us"
//               status={measures === 'us' ? 'checked' : 'unchecked'}
//               onPress={() => setMeasures('us')}
//               color={Colors.darkBlue}
//             />
//             <Text style={styles.radioBtnTitle}>US</Text>
//           </View>
//           <View style={styles.radioBtn}>
//             <RadioButton
//               value="metric"
//               status={measures === 'metric' ? 'checked' : 'unchecked'}
//               onPress={() => setMeasures('metric')}
//               color={Colors.darkBlue}
//             />
//             <Text style={styles.radioBtnTitle}>metric</Text>
//           </View>
//         </View>
//         <FlatList data={extendedIng} renderItem={renderIngredients} />
//       </View>
//     );
//   } else if (state === 'steps') {
//     return (
//       <View style={styles.container}>
//         <TopBarView
//           handleIng={handleIng}
//           handleOverview={handleOverview}
//           handleSteps={handleSteps}
//           handleNutrition={handleNutrition}
//           handleWine={handleWine}
//           handleTips={handleTips}
//           recipe={recipe}
//         />
//         <StepsScreen recipe={recipe} />
//       </View>
//     );
//   } else if (state === 'nutrition') {
//     return (
//       <View style={styles.container}>
//         <TopBarView
//           handleIng={handleIng}
//           handleOverview={handleOverview}
//           handleSteps={handleSteps}
//           handleNutrition={handleNutrition}
//           handleWine={handleWine}
//           handleTips={handleTips}
//           recipe={recipe}
//         />
//         <NutritionScreen recipe={recipe} nutrition={nutrition} />
//       </View>
//     );
//   } else if (state === 'wine') {
//     return (
//       <View style={styles.container}>
//         <TopBarView
//           handleIng={handleIng}
//           handleOverview={handleOverview}
//           handleSteps={handleSteps}
//           handleNutrition={handleNutrition}
//           handleWine={handleWine}
//           handleTips={handleTips}
//           recipe={recipe}
//         />
//         <WinePairingScreen recipe={recipe} />
//       </View>
//     );
//   } else if (state === 'tips') {
//     return (
//       <View style={styles.container}>
//         <TopBarView
//           handleIng={handleIng}
//           handleOverview={handleOverview}
//           handleSteps={handleSteps}
//           handleNutrition={handleNutrition}
//           handleWine={handleWine}
//           handleTips={handleTips}
//           recipe={recipe}
//         />
//         <TipsScreen recipe={recipe} />
//       </View>
//     );
//   }
// };

// export default RecipeInfoScreen;

import { useWindowDimensions, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TabView, TabBar } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../constants/Colors';
import OverviewScreen from '../OverviewScreen';
import { useDispatch, useSelector } from 'react-redux';
import INGScreen from '../INGScreen';
import StepsScreen from '../StepsScreen';
import styles from './RecipeInfoScreenStyles';
import { getNutritionByIdAsync, getRecipeInformationAsync } from '../../api';

const RecipeInfoScreen = props => {
  const { recipe, recipeIsLoading, extendedIng, nutrition } = useSelector(
    state => state.recipeInfoSlice,
  );
  const dispatch = useDispatch();
  const { id } = props.route.params;

  useEffect(() => {
    dispatch(getRecipeInformationAsync(id));
  }, [dispatch, id]);
  const [measures, setMeasures] = useState('metric');

  // const renderScene = SceneMap({
  //   overview: <OverviewScreen recipe={recipe} />,
  //   // ingredients: ProductIngScreen,
  // });

  const renderIng = ({ item }) => (
    <INGScreen ing={item} measures={measures} setMeasures={setMeasures} />
  );

  const [routes] = React.useState([
    { key: 'overview', title: 'Overview' },
    { key: 'ingredients', title: 'Ingredients' },
    { key: 'steps', title: 'Steps' },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'overview':
        return <OverviewScreen recipe={recipe} />;
      case 'ingredients':
        return (
          <FlatList
            style={styles.flatlistContainer}
            data={extendedIng}
            renderItem={renderIng}
          />
        );
      case 'steps':
        return <StepsScreen recipe={recipe} />;
      default:
        return null;
    }
  };

  const getTabBarIcon = props => {
    const { route } = props;
    if (route.key === 'overview') {
      return <Icon name="folder" size={30} color={Colors.gray} />;
    } else if (route.key === 'ingredients') {
      return <Icon name="shopping-cart" size={30} color={Colors.gray} />;
    } else if (route.key === 'steps') {
      return <Icon name="format-align-justify" size={30} color={Colors.gray} />;
    }
  };

  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={props => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: Colors.white }}
          renderIcon={props => getTabBarIcon(props)}
          style={{ backgroundColor: Colors.red }}
        />
      )}
    />
  );
};

export default RecipeInfoScreen;
