import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons'
import Home from './screens/Home';
import Alerts from './screens/Alerts';
import Search from './screens/Search';
import Profile from './screens/Profile';

export default createMaterialBottomTabNavigator({
    Home: { screen: Home,
            navigationOptions: {
              tabBarIcon: ({tintColor}) => (
                <Icon color={tintColor} name="md-home" size={24} />
              )
            }
          },
    Search: {screen: Search,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon color={tintColor} name="ios-search" size={24} />
        )
      }
    },
    Alerts: {screen: Alerts,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon color={tintColor} name="ios-notifications" size={24} />
        )
      }
    },
    Profile: {screen: Profile,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon color={tintColor} name="ios-person" size={24} />
        )
      }
    }
  }, {
    initialRouteName: 'Home',
    activeColor: '#23C1B8',
    inactiveColor: '#a2e2de',
    barStyle: { backgroundColor: '#f2fefa' },

  }
);
