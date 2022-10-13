import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.lightBlue,
    borderRadius: 5,
    marginHorizontal: 5,
    marginVertical: 2,
  },
  icon: {
    backgroundColor: Colors.darkBlue,
  },
  title: {
    color: Colors.black,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
  },
});
