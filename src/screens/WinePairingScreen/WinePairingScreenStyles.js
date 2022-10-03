import { Dimensions, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    margin: 5,
    padding: 2,
  },
  description: {
    color: Colors.black,
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    letterSpacing: 0.2,
    padding: 5,
  },
  linkBtn: {
    backgroundColor: Colors.blue,
    borderRadius: 5,
    marginHorizontal: 5,
    marginTop: 5,
    padding: 10,
    width: Dimensions.get('window').width / 2,
  },
  linkBtnTitle: {
    color: Colors.white,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    textAlign: 'center',
  },
  title: {
    color: Colors.black,
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    padding: 2,
  },
  wineContainer: {
    // justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    margin: 5,
    padding: 10,
  },
  wineImage: {
    height: 100,
    resizeMode: 'contain',
    width: '100%',
  },
  wineText: {
    color: Colors.black,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    padding: 5,
  },
});
