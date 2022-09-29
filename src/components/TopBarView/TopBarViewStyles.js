import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.lightBlue,
  },
  innerContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 7,
  },
  scrollview: {
    height: 70,
  },
  title: {
    color: Colors.darkBlue,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
  },
});
