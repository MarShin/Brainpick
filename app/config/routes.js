import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from '../screens/Home';
import CameraInstructions from '../screens/CameraInstructions';

import Settings from '../screens/Settings';
import Me from '../screens/Me';

import Contribution from '../screens/Contribution';

export const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null, // specifies no object return for header, default white space
    },
  },
  CameraInstructions: {
    screen: CameraInstructions,
    navigationOptions: ({ navigation }) => ({
      // navigation object automatically attached to screen
      headerTitle: 'Camera Task',
    }),
  },
});

export const Tabs = createBottomTabNavigator({
  Feed: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  Contribution: {
    screen: Contribution,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => <Icon name="account-balance" size={35} color={tintColor} />,
    },
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => <Icon name="settings" size={35} color={tintColor} />,
    },
  },
});

export const SettingsStack = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    },
  },
});

export const Root = createStackNavigator(
  {
    Tabs: {
      screen: Tabs,
    },
    Settings: {
      screen: SettingsStack,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);
