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
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './Home';
import FlagStatus from './FlagStatus';
import FlagCode from './FlagCode';
import Trivia from './Trivia';


const HomeStack = createStackNavigator(
  {
    Home: { screen: Home },
    FlagStatus: { screen: FlagStatus },
  },
  {
    navigationOptions: {
      tabBarLabel: 'Home!',
      showIcon: true,
      tabBarIcon: ({ focused, tintColor }) => {
        return <Icon name="home" size={25} color={tintColor} />;
      },
    },
  }
);

const HistoryStack = createStackNavigator(
  {
    History: {
        screen: FlagCode,
    },
  },
  {
    navigationOptions: {
      title: 'History & Etiquette',
      showIcon: true,
      tabBarIcon: ({ focused, tintColor }) => {
        return <Icon name="flag-o" size={25} color={tintColor} />;
      },
    },
  }
);

const TriviaStack = createStackNavigator(
  {
    History: {
        screen: Trivia,
    },
  },
  {
    navigationOptions: {
      title: 'Trivia',
      showIcon: true,
      tabBarIcon: ({ focused, tintColor }) => {
        return <Icon name="trophy" size={25} color={tintColor} />;
      },
    },
  }
);

const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeStack, },
    History: { screen: HistoryStack, },
    Trivia: { screen: TriviaStack },
  },
  {
    initialRouteName: 'Home',
  }
);

const App = createAppContainer(bottomTabNavigator);

export default App;
