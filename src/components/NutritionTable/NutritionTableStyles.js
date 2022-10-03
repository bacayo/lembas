import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  amount: {
    color: Colors.black,
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    width: 80,
  },
  bar: {
    alignItems: 'center',
    flexDirection: 'row',
    width: 150,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 2,
  },
  innerContainer: {
    alignSelf: 'center',
    marginLeft: 13,
    textAlign: 'center',
  },
  need: {
    color: Colors.black,
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    textAlign: 'center',
    width: 50,
  },
  progressBar: {
    height: 10,
    width: 100,
  },
  title: {
    color: Colors.black,
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    width: 100,
  },
});
