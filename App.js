import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import store from './src/redux/store';

import Router from './src/Router';

const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <Router />
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
