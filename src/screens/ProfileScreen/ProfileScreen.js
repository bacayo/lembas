import { View, Button, Text } from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';

import ProfileListCard from '../../components/ProfileListCard';
import styles from './ProfileScreenStyles';
import ScreenNames from '../../constants/ScreenNames';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const logout = () => {
    auth()
      .signOut()
      .then(() => {
        navigation.navigate('LoginScreen');
      });
  };

  const user = auth().currentUser;
  console.log(user.email);
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
      <Text>Email:{user.email} </Text>
      <Button title="Log out" onPress={logout} />
    </View>
  );
};

export default ProfileScreen;
