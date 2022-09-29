import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryColor,
    flex: 1,
  },
  detailCardContainer: {
    alignItems: 'center',
    backgroundColor: Colors.gray,
    borderRadius: 10,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 5,
  },
  extraDetails: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    height: Dimensions.get('window').height / 3,
    marginHorizontal: 10,
    resizeMode: 'contain',
  },
  source: {
    color: Colors.darkBlue,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    marginLeft: 10,
    textDecorationLine: 'underline',
  },
  textInfo: {
    color: Colors.black,
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
  },
  title: {
    color: Colors.black,
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
  },
});
