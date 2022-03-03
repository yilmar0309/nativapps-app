import React from 'react';
import {enableScreens} from 'react-native-screens';
import {createStackNavigator} from '@react-navigation/stack';

import InjectHOC from './InjectHOC';
import {Props, SliceMovie} from './interfaceInject';

import Home from '@screens/HomeScreens/Home/Home';
import {getAllMovieRedux} from '@presenter/io/movieSlice';

enableScreens();
const Stack = createStackNavigator();
function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShadowVisible: true,
        animationEnabled: true,
        cardStyle: {
          backgroundColor: '#ffffff',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={InjectHOC<Props, SliceMovie>(Home, {getAllMovieRedux})}
        options={{
          headerTitle: 'List of Movies',
          cardShadowEnabled: true,
          headerStyle: {
            backgroundColor: '#EEF2EF',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;
