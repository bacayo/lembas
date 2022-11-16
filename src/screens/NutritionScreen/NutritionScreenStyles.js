import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  chip: {
    backgroundColor: Colors.gray,
    borderColor: Colors.lightBlue,
    borderRadius: 5,
    borderWidth: 2,
    elevation: 5,
    marginHorizontal: 5,
    marginVertical: 5,
    padding: 5,
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
  container: {
    flex: 1,
    flexGrow: 1,
  },
  danger: {
    color: Colors.red,
    fontFamily: 'Roboto-Medium',
  },
  footerContainer: {
    paddingBottom: 20,
  },
  good: {
    color: Colors.darkBlue,
    fontFamily: 'Roboto-Medium',
  },
  heading: {
    color: Colors.black,
    fontFamily: 'Roboto-Medium',
    fontSize: 24,
    marginLeft: 20,
    marginVertical: 10,
  },
  nutritionContainer: {
    flex: 1,
  },
  quickview: {
    color: Colors.black,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    marginLeft: 15,
    marginVertical: 5,
  },
});
