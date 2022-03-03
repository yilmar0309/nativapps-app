import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MenuProvider} from 'react-native-popup-menu';

import StackNavigation from '@navigation/stack.navigation';

import Alert from '@components/Alert/Alert';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#008cb5',
    secondary: '#040505',
  },
};

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar
        animated={true}
        backgroundColor={Platform.OS === 'android' ? '#EEF2EF' : '#EEF2EF'}
        barStyle="dark-content"
        showHideTransition="fade"
      />
      <MenuProvider>
        <NavigationContainer theme={MyTheme}>
          <StackNavigation />
        </NavigationContainer>
      </MenuProvider>
      <Alert />
    </SafeAreaProvider>
  );
};

export default App;
