// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import Icon from 'react-native-vector-icons/Ionicons';
import Home from './src/page/home';
import Login from './src/page/Login';
import Fotos from './src/page/fotos';
import Video from './src/page/video';




const Stack = createMaterialBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        activeColor="#ffffff"
        inactiveColor="#bda1f7"
      >
        <Stack.Screen name="Home" component={Home}
          options={() => ({
            tabBarIcon: ({ tintColor = "white" }) => (
              <View>
                <View >
                  <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />
                </View>
              </View>
            ),
          })} />

        <Stack.Screen name="Login" component={Login}
          options={() => ({
            tabBarIcon: ({ tintColor = "white" }) => (
              <View>
                <View >
                  <Icon style={[{ color: tintColor }]} size={25} name={'ios-person'} />
                </View>
              </View>
            ),
          })} />
           <Stack.Screen name="Imagens" component={Fotos}
          options={() => ({
            tabBarIcon: ({ tintColor = "white" }) => (
              <View>
                <View >
                  <Icon style={[{ color: tintColor }]} size={25} name={'ios-images'} />
                </View>
              </View>
            ),
          })} />
           <Stack.Screen name="Video" component={Video}
          options={() => ({
            tabBarIcon: ({ tintColor = "white" }) => (
              <View>
                <View >
                  <Icon style={[{ color: tintColor }]} size={25} name={'ios-videocam'} />
                </View>
              </View>
            ),
          })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;