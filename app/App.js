import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Provider } from 'react-redux';
import store from './config/store';
import { Root } from './config/routes';
import { AlertProvider } from './components/Alert';

// import FlatListDemo from './screens/FlatListDemo';

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
  $inputText: '#797979',
  //   $outline: 1
});

// export default () => <FlatListDemo />;

export default () => (
  <Provider store={store}>
    <AlertProvider>
      <Root />
    </AlertProvider>
  </Provider>
);
