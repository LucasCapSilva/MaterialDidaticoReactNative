import React, { Component } from "react"
import { View, Image,TouchableOpacity } from 'react-native';
import { TextInput,Text,Button } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home'
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