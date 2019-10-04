import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Home from './screens/Home';
import Login from './screens/Login';
import Navigator from './Navigator';

const AppNavigator = createSwitchNavigator({
  MainStack: {screen: Navigator},
  AuthStack: {screen: Login}
},
  {
    initialRouteName: 'AuthStack',
  });

const App = createAppContainer(AppNavigator);

export default App;
