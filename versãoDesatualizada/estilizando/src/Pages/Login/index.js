import React, { Component } from "react"
import { View, Image,TouchableOpacity } from 'react-native';
import { TextInput,Text,Button } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

export default class Login extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Login',
  
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
           style={{ width: 70}}
           title="Calcular orçamento"
            color="green"
          />
           <Button
           onPress={() => this.props.navigation.navigate('FindAllCategoria')}
            title="Cancelar orçamento"
            color="red"
          />
          <View style={{ flexDirection:"row", alignItems:"center" }} >
           
          </View>

        </View>
      </View>
      
    );
    
  }
}
