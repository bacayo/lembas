import { View } from 'react-native';
import React from 'react';

import ProfileListCard from '../../components/ProfileListCard';
import styles from './ProfileScreenStyles';
import ScreenNames from '../../constants/ScreenNames';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ProfileListCard
        icon={'folder'}
        title={'Favorite Recipes'}
        screenName={ScreenNames.favoriteRecipe}
      />
      <ProfileListCard
        icon={'folder'}
        title={'Favorite Products'}
        screenName={ScreenNames.favoritesScreen}
      />
      <ProfileListCard icon={'account-circle'} title={'My Account'} />
    </View>
  );
};

export default ProfileScreen;
