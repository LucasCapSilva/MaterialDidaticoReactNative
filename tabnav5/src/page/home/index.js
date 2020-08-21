import { StatusBar } from 'expo-status-bar';
import React, { Component } from "react"
import { StyleSheet, Text, View,Button,Image } from 'react-native';


export default class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
      title: 'Video'
    });
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
            onPress={() => navigation.navigate('Login')}
            title="Login"
            color="green"
          />
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
