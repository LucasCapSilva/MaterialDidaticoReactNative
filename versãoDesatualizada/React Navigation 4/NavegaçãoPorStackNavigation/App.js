import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {Button } from 'react-native';
import Top from './src/page/top';
import Home from './src/page/home';
import Login from './src/page/Login';


const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Login: {
    screen: Login,
  },
});

export default createAppContainer(AppNavigator);