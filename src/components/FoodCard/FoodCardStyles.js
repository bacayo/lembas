import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  image: {
    borderRadius: 5,
    height: 200,
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  test: {
    backgroundColor: Colors.backgrndClr,
    bottom: 0,
    height: 50,
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
  },
  text: {
    color: Colors.primaryColor,
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    marginLeft: 10,
  },
});
