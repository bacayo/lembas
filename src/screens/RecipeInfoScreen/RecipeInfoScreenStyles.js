import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  flatlistContainer: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  noWine: {
    color: Colors.black,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    padding: 10,
  },
  noWineContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  radioBtn: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 2,
  },
  radioBtnTitle: {
    color: Colors.black,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  radioButtonContainer: {
    alignItems: 'center',
    backgroundColor: Colors.primaryColor,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  tabBar: {
    backgroundColor: Colors.red,
    width: 'auto',
  },
});
