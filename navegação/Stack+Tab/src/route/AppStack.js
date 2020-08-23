import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../page/home/index';
import Login from '../page/Login/index';
import AppTab from './AppTab';



const Stack = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Tab" component={AppTab} /> 
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;