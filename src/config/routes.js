// @flow
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import createMaterialBottomTabNavigator from 'react-navigation-material-bottom-tabs/createMaterialBottomTabNavigator';

import { createMaterialIcon } from '../utils/createIcon';

import Discover from '../screens/Discover';
import Task from '../screens/Task';
import Settings from '../screens/Settings';
import Contributions from '../screens/Contributions';

import Loading from '../screens/Loading';
import LogIn from '../screens/LogIn';

export const DiscoverNavigator = createStackNavigator(
  {
    Discover
  },
  {
    headerMode: 'none'
  }
);

export const SettingsNavigator = createStackNavigator(
  {
    Settings
  },
  {
    headerMode: 'none'
  }
);

export const HomeNavigator = createMaterialBottomTabNavigator(
  {
    Discover: {
      screen: DiscoverNavigator,
      navigationOptions: {
        tabBarLabel: 'Discover',
        tabBarIcon: ({ tintColor }) =>
          createMaterialIcon('explore', tintColor, 24),
        tabBarColor: '#374B57'
      }
    },
    Contribution: {
      screen: Contributions,
      navigationOptions: {
        tabBarLabel: 'Contributions',
        tabBarIcon: ({ tintColor }) =>
          createMaterialIcon('account-balance', tintColor, 24),
        tabBarColor: '#374B57'
      }
    },
    Settings: {
      screen: SettingsNavigator,
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: ({ tintColor }) =>
          createMaterialIcon('settings', tintColor, 24),
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

const AppNavigator = createStackNavigator(
  {
    HomeNavigator,
    Task
  },
  {
    headerMode: 'none'
  }
);

export const Root = createSwitchNavigator(
  {
    Loading,
    LogIn,
    AppNavigator
  },
  {
    initialRouteName: 'Loading'
  }
);
