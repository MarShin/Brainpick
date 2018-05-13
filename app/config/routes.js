import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import { Icon } from "react-native-elements";

import Home from "../screens/Home";
import CameraInstructions from "../screens/CameraInstructions";

import Settings from "../screens/Settings";
import Me from "../screens/Me";

export const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null // specifies no object return for header, default white space
    }
  },
  CameraInstructions: {
    screen: CameraInstructions,
    navigationOptions: ({ navigation }) => ({
      // navigation object automatically attached to screen
      headerTitle: "Camera Task"
    })
  }
});

export const Tabs = TabNavigator({
  Feed: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="list" size={35} color={tintColor} />
      )
    }
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: "Me",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="account-circle" size={35} color={tintColor} />
      )
    }
  }
});

export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: "Settings"
    }
  }
});

export const Root = StackNavigator(
  {
    Tabs: {
      screen: Tabs
    },
    Settings: {
      screen: SettingsStack
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);
