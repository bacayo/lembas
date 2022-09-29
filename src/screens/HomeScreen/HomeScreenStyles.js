import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryColor,
    flex: 1,
  },
  header: {
    color: Colors.black,
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 20,
  },
});
