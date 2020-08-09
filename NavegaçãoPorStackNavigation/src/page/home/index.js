import React, { Component } from "react"
import { View, Image,TouchableOpacity } from 'react-native';
import { TextInput,Text,Button } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerStyle: {
      backgroundColor: 'blue',
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
      <View style={{paddingTop:70}}>
       <Image source={{ uri: "https://petcare.com.br/centroveterinario/wp-content/uploads/2013/04/guia1.jpg" }}
                style={{alignSelf:"center", height:200, width:190}}
              />
              </View>
              <View style={{alignSelf:"center"}}>
              <Text style={{fontSize:30}} >Ola mundo</Text>
              </View>
              <View>
              <Button
           onPress={() => this.props.navigation.navigate('Login')}
            title="Login"
            color="green"
          />
              </View>
        
       
      </View>
      
    );
    
  }
}