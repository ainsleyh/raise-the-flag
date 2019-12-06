/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './Home';
import FlagStatus from './FlagStatus';

const MainNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
        header: null,
    },
  },
  FlagStatus: {
    screen: FlagStatus,
    navigationOptions: {
        header: null,
    },
  },
},
  {
    initialRouteName: 'Home',
  });

const App = createAppContainer(MainNavigator);

export default App;
