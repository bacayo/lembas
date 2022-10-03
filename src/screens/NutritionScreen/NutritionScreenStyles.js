import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  chip: {
    borderColor: Colors.lightBlue,
    borderWidth: 1,
    marginHorizontal: 5,
    marginVertical: 5,
    padding: 4,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 10,
  },
  chipTitle: {
    color: Colors.black,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  danger: {
    color: Colors.red,
    fontFamily: 'Roboto-Medium',
  },
  heading: {
    color: Colors.black,
    fontFamily: 'Roboto-Medium',
    fontSize: 24,
    marginLeft: 20,
    marginVertical: 10,
  },
  quickview: {
    color: Colors.black,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    marginLeft: 20,
    marginVertical: 5,
  },
});
