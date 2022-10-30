import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    flexDirection: 'row',
    flex: 1,
    marginHorizontal: 5,
    marginTop: 10,
  },
  image: {
    height: 50,
    resizeMode: 'contain',
    width: 50,
  },
  ingredients: {
    color: Colors.black,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    marginLeft: 3,
    padding: 2,
  },
});
