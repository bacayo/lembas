import { FlatList, Keyboard, View } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityIndicator } from 'react-native-paper';

import SearchBar from '../../components/SearchBar';
import { searchRecipeAsync } from '../../api';
import FoodCard from '../../components/FoodCard';
import ScreenNames from '../../constants/ScreenNames';
import Colors from '../../constants/Colors';

const SearchRecipeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [limit, setLimit] = useState(10);
  const dispatch = useDispatch();

  //* get recipes from slice
  const { recipe, recipeIsLoading } = useSelector(state => state.recipeSlice);

  const renderRecipe = ({ item }) => (
    <FoodCard food={item} screen={ScreenNames.recipeInfoScreen} />
  );

  const onChangeSearch = item => setSearchQuery(item);

  const handleSearch = () => {
    dispatch(searchRecipeAsync({ query: searchQuery, number: limit }));
    Keyboard.dismiss();
  };

  const loadMoreRecipe = () => {
    setLimit(limit + 10);
    dispatch(searchRecipeAsync({ query: searchQuery, number: limit }));
  };

  return (
    <View>
      <SearchBar
        placeholder={'Search'}
        value={searchQuery}
        onChangeText={onChangeSearch}
        onIconPress={handleSearch}
        onSubmitEditing={handleSearch}
      />
      <FlatList
        data={recipe}
        renderItem={renderRecipe}
        onEndReachedThreshold={0.3}
        onEndReached={loadMoreRecipe}
        ListFooterComponent={() =>
          recipeIsLoading && (
            <ActivityIndicator
              animating={true}
              color={Colors.red}
              size={'large'}
            />
          )
        }
      />
    </View>
  );
};

export default SearchRecipeScreen;
