import React, { Component } from "react"
import { View, Image,TouchableOpacity } from 'react-native';
import { TextInput,Text,Button,StyleSheet } from 'react-native';


import { FontAwesome } from '@expo/vector-icons';
export default class Login extends Component {
  static navigationOptions = ({ navigation }) => ({
      title: 'Video'
    });
    render() {  
  return (
    <View flex={1} style={{ justifyContent: "flex-start" }}>
    <View>
    <Text style={{fontSize: 28,
fontWeight: "bold", paddingTop:10, alignSelf:"center"}}>Login</Text>
    <Text style={{fontSize: 25,
fontWeight: "bold", paddingTop:10, paddingLeft:10}}>Email</Text>
    <TextInput
   
  style={{ height: 40, borderColor: 'gray',fontSize: 25, borderWidth: 1 }}
/>
      <Text style={{fontSize: 25,
fontWeight: "bold", paddingTop:10, paddingLeft:10}}>Senha</Text>
   <TextInput
  
  style={{ height: 40, borderColor: 'gray',fontSize: 25, borderWidth: 1 }}
/>
    </View>
    <View style={{ alignItems: "flex-start",  flexDirection: 'row',
justifyContent: 'space-between', paddingLeft:15, paddingTop:20 }}>
            <Button
            onPress={() => navigation.navigate('Home')}
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
