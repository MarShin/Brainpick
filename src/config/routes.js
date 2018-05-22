// @flow
import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import createMaterialBottomTabNavigator from 'react-navigation-material-bottom-tabs/createMaterialBottomTabNavigator';
import { Icon } from 'react-native-elements';

import Discover from '../screens/Discover';
import CameraInstructions from '../screens/CameraInstructions';
import Settings from '../screens/Settings';
import Contributions from '../screens/Contributions';
import Me from '../screens/Me';

// Authentications
import Loading from '../screens/Loading';
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';
import Main from '../screens/Main';

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

type TabBarIconProps = { tintColor: string };

export const Tabs = createMaterialBottomTabNavigator(
  {
    Discover: {
      screen: DiscoverStack,
      navigationOptions: {
        tabBarLabel: 'Discover',
        tabBarIcon: ({ tintColor }: TabBarIconProps) => (
          <Icon name="list" size={24} color={tintColor} />
        ),
        tabBarColor: '#374B57'
      }
    },
    Contribution: {
      screen: Contributions,
      navigationOptions: {
        tabBarLabel: 'Contributions',
        tabBarIcon: ({ tintColor }: TabBarIconProps) => (
          <Icon name="account-balance" size={24} color={tintColor} />
        ),
        tabBarColor: '#374B57'
      }
    },
    Settings: {
      screen: Me,
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: ({ tintColor }: TabBarIconProps) => (
          <Icon name="settings" size={24} color={tintColor} />
        ),
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

export const AppStack = createStackNavigator(
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

export const Root = createSwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    AppStack
  },
  {
    initialRouteName: 'Loading'
  }
);
