import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import createMaterialBottomTabNavigator from 'react-navigation-material-bottom-tabs/createMaterialBottomTabNavigator';
import { Icon } from 'react-native-elements';

import Discover from '../screens/Discover';
import CameraInstructions from '../screens/CameraInstructions';

import Settings from '../screens/Settings';
import Me from '../screens/Me';

import Contribution from '../screens/Contribution';

export const DiscoverStack = createStackNavigator({
  Discover: {
    screen: Discover,
    navigationOptions: {
      header: () => null // specifies no object return for header, default white space
    }
  },
  CameraInstructions: {
    screen: CameraInstructions,
    navigationOptions: ({ navigation }) => ({
      // navigation object automatically attached to screen
      headerTitle: 'Camera Task'
    })
  }
});

export const Tabs = createMaterialBottomTabNavigator(
  {
    Discover: {
      screen: DiscoverStack,
      navigationOptions: {
        tabBarLabel: 'Discover',
        tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
        tabBarColor: '#374B57'
      }
    },
    Contribution: {
      screen: Contribution,
      navigationOptions: {
        tabBarLabel: 'Me',
        tabBarIcon: ({ tintColor }) => <Icon name="account-balance" size={35} color={tintColor} />,
        tabBarColor: '#374B57'
      }
    },
    Me: {
      screen: Me,
      navigationOptions: {
        tabBarLabel: 'Me',
        tabBarIcon: ({ tintColor }) => <Icon name="settings" size={35} color={tintColor} />,
        tabBarColor: '#374B57'
      }
    }
  },
  {
    initialRouteName: 'Discover',
    activeTintColor: '#FFFFFF',
    barStyle: {
      backgroundColor: '#374B57',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.5,
      shadowRadius: 4
    }
  }
);

export const SettingsStack = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings'
    }
  }
});

export const Root = createStackNavigator(
  {
    Tabs: {
      screen: Tabs
    },
    Settings: {
      screen: SettingsStack
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);
