import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  inputContainer: {},
  loginImg: {
    maxHeight: '35%',
    maxWidth: '100%',
  },
  recoverPwd: {
    color: Colors.darkBlue,
    fontFamily: 'Roboto-Bold',
    fontSize: 12,
    marginHorizontal: 5,
    marginVertical: 5,
    padding: 5,
    textAlign: 'right',
  },
  register: {
    color: Colors.darkBlue,
    fontFamily: 'Roboto-Bold',
    marginLeft: 5,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    color: Colors.placeholder,
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
  },
  textContainer: {
    // borderWidth: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 20,
    padding: 5,
  },
  title: {
    color: Colors.darkBlue,
    fontFamily: 'Roboto-Medium',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 5,
    padding: 5,
  },
});
