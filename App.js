import React from 'react';
import Routes from './routes';

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {StatusBar} from 'react-native';

const App = () => {
  const theme = {
    ...DefaultTheme, //pega todo default theme
    colors: {
      ...DefaultTheme.colors,
      // primary: '#E50914',
      primary: '#ffffff',

      background: '#3C3C3C',
      placeholder: '#ffffff',
      text: '#ffffff',
    },
  }; // Alterar default color

  return (
    <PaperProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Routes />
    </PaperProvider>
  );
};

export default App;
