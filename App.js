import { View, Text } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';

import store from './src/redux/store';
import Router from './src/Router';

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
