import { StyleSheet, Dimensions } from 'react-native';

import Colors from '../../../constants/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  image: {
    aspectRatio: 1,
    margin: 5,
    padding: 5,
  },
  info: {
    color: Colors.black,
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
  },
  infoCard: {
    backgroundColor: Colors.lightBlue,
    borderRadius: 5,
    margin: 5,
    padding: 5,
  },
  infoContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 5,
    padding: 5,
    width: Dimensions.get('window').width / 1.5,
  },
  productTitle: {
    color: Colors.black,
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    margin: 5,
    padding: 5,
    textAlign: 'center',
  },
});
