import { useWindowDimensions } from 'react-native';
import React, { useEffect } from 'react';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../constants/Colors';
import { getProductInfoAsync } from '../../api';
import ProductOverviewScreen from './ProductOverviewScreen/';
import ProductIngScreen from './ProductIngScreen/';
import Loading from '../../components/Loading';

const getTabBarIcon = props => {
  const { route } = props;
  if (route.key === 'overview') {
    return <Icon name="folder" size={30} color={Colors.gray} />;
  } else if (route.key === 'ingredients') {
    return <Icon name="shopping-cart" size={30} color={Colors.gray} />;
  }
};

const renderScene = SceneMap({
  overview: ProductOverviewScreen,
  ingredients: ProductIngScreen,
});

const ProductDetailScreen = props => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'overview', title: 'Overview' },
    { key: 'ingredients', title: 'Ingredients' },
  ]);

  const { productIsLoading } = useSelector(state => state.productSlice);

  const dispatch = useDispatch();

  const { id } = props.route.params;

  useEffect(() => {
    dispatch(getProductInfoAsync(id));
  }, [dispatch, id]);

  if (productIsLoading) {
    return <Loading />;
  }

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

export default ProductDetailScreen;
