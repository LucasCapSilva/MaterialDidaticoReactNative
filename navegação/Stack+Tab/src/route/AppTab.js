// In App.js in a new project

import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import Fotos from '../page/Imagem/index';
import { View } from 'react-native';
import Home from '../page/home';
import SobreNos from '../page/SobreNos';

const Stack = createMaterialBottomTabNavigator();

function AppTab() {
    return (

        <Stack.Navigator
            activeColor="#ffffff"
            inactiveColor="#bda1f7"
            initialRouteName="Imagens"
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
            <Stack.Screen name="SobreNos" component={SobreNos}
                options={() => ({
                    tabBarIcon: ({ tintColor = "white" }) => (
                        <View>
                            <View >
                                <Icon style={[{ color: tintColor }]} size={25} name={'ios-contacts'} />
                            </View>
                        </View>
                    ),
                })} />

        </Stack.Navigator>
    );
}

export default AppTab;