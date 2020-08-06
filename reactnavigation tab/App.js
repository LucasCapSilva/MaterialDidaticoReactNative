import React from 'react';
import { Image } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';


import Login from './src/Pages/Login';
import Home from './src/Pages/Home';
console.disableYellowBox = true;

const AppNavigator = createDrawerNavigator({

  Home:{
    screen: Home
  },  Login:{
    screen: Login
  }


 

}, {

  initialRouteName: 'Home',
  drawerBackgroundColor: '#373037',
  contentOptions:{
    activeTintColor: '#e91e63',
    inactiveTintColor: 'white',
    activeBackgroundColor: 'black',
    //inactiveBackgroundColor: "white"

  }

});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;