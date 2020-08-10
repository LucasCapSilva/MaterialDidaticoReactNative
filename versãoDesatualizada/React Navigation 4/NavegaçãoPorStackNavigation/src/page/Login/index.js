import React, { Component } from "react"
import { View, Image,TouchableOpacity } from 'react-native';
import { TextInput,Text,Button } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

export default class Login extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Login',
    headerStyle: {
      backgroundColor: '#544e54',
    },
    headerTintColor: 'black',
    headerTitleStyle: {
      fontWeight: 'bold',
      shadowColor: "#000",
      borderColor: "#f4f4f4",
      borderWidth: 0.1,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,


    },
    headerRight: (
      <TouchableOpacity size={30} onPress={() => navigation.toggleDrawer()} style={{ width: '100%', height: 77, alignItems: 'center', justifyContent: 'center' }}>
        <FontAwesome name="bars" size={30} style={{ paddingRight: 20 }} />
      </TouchableOpacity>
    )
  });

  componentDidMount() {

  }

  render() {
    return (
      <View flex={1} style={{ justifyContent: "flex-start" }}>
        <View>
        <Text style={{fontSize: 28,
    fontWeight: "bold", paddingTop:10, alignSelf:"center"}}>Login</Text>
        <Text style={{fontSize: 25,
    fontWeight: "bold", paddingTop:10, paddingLeft:10}}>Email</Text>
        <TextInput
       keyboardType='decimal-pad'
      style={{ height: 40, borderColor: 'gray',fontSize: 25, borderWidth: 1 }}
    />
          <Text style={{fontSize: 25,
    fontWeight: "bold", paddingTop:10, paddingLeft:10}}>Senha</Text>
       <TextInput
       keyboardType='decimal-pad'
      style={{ height: 40, borderColor: 'gray',fontSize: 25, borderWidth: 1 }}
    />
        </View>
        <View style={{ alignItems: "flex-start",  flexDirection: 'row',
    justifyContent: 'space-between', paddingLeft:15, paddingTop:20 }}>
           <Button
           onPress={() => this.props.navigation.navigate('Home')}
            title="Login"
            color="green"
          />
          <View style={{ flexDirection:"row", alignItems:"center" }} >
           
          </View>

        </View>
      </View>
      
    );
    
  }
}