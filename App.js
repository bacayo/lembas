import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import store from './src/redux/store';
import Router from './src/Router';

const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider
        settings={{
          icon: props => <MaterialIcons {...props} />,
        }}>
        <Router />
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
