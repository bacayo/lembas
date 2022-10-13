import { TouchableOpacity } from 'react-native';
import React from 'react';
import { Avatar, Card } from 'react-native-paper';

import styles from './ProfileListCardStyles';
import { useNavigation } from '@react-navigation/native';

const ProfileListCard = ({ title, icon, screenName }) => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate(screenName);
  };

  return (
    <TouchableOpacity onPress={handleNavigation} style={styles.container}>
      <Card.Title
        titleStyle={styles.title}
        title={title}
        left={props => (
          <Avatar.Icon style={styles.icon} {...props} icon={icon} />
        )}
      />
    </TouchableOpacity>
  );
};

export default ProfileListCard;
