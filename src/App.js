import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider as ReduxProvider } from 'react-redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { YellowBox } from 'react-native';

import store from './config/store';
import { Root } from './config/routes';
import { AlertProvider } from './components/Alert';

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader'
]);

EStyleSheet.build({
  $darkBlue: '#142026',
  $regularBlue: '#22455B',
  $lightBlue: '#417690',
  $paleBlue: '#ADC7D4',
  $darkGreen: '#258E77',
  $regularGreen: '#45BFA3',
  $lightGreen: '#50E3C2',
  $darkOrange: '#F59223',
  $regularOrange: '#F5BC23',
  $lightOrange: '#FFCC2D',
  $darkGray: '#2C2C2C',
  $regularGray: '#565656',
  $lightGray: '#8C8C8C',
  $paleGray: '#C0C0C0',
  $white: '#FFFFFF',
  $border: '#979797',
  $inputText: '#797979'
});

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#40A3E2',
    accent: 'yellow'
  }
};

const App = () => (
  <ReduxProvider store={store}>
    <PaperProvider theme={theme}>
      <AlertProvider>
        <Root />
      </AlertProvider>
    </PaperProvider>
  </ReduxProvider>
);

export default App;
