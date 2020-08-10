import React, { Component } from "react"
import { View, Image,TouchableOpacity, ScrollView } from 'react-native';
import { TextInput,Text,Button } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

export default class Fotos extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Fotos'
  });

  componentDidMount() {

  }

  render() {
    return (
      <View flex={1} style={{ justifyContent: "flex-start" }}>
      <ScrollView>
      <View style={{paddingTop:70}}>
      <Text style={{fontSize:30, alignSelf:"flex-start"}} >Gato</Text>
       <Image source={{ uri: "https://petcare.com.br/centroveterinario/wp-content/uploads/2013/04/guia1.jpg" }}
                style={{alignSelf:"flex-start", height:200, width:190}}
              />
              </View>
              <View style={{paddingTop:70}}>
      <Text style={{fontSize:30, alignSelf:"flex-start"}} >Gato</Text>
       <Image source={{ uri: "https://petcare.com.br/centroveterinario/wp-content/uploads/2013/04/guia1.jpg" }}
                style={{alignSelf:"flex-start", height:200, width:190}}
              />
              </View>
              <View style={{paddingTop:70}}>
      <Text style={{fontSize:30, alignSelf:"flex-start"}} >Gato</Text>
       <Image source={{ uri: "https://petcare.com.br/centroveterinario/wp-content/uploads/2013/04/guia1.jpg" }}
                style={{alignSelf:"flex-start", height:200, width:190}}
              />
              </View>
              <View style={{paddingTop:70}}>
      <Text style={{fontSize:30, alignSelf:"flex-start"}} >Gato</Text>
       <Image source={{ uri: "https://petcare.com.br/centroveterinario/wp-content/uploads/2013/04/guia1.jpg" }}
                style={{alignSelf:"flex-start", height:200, width:190}}
              />
              </View>
              </ScrollView>
      </View>
      
      
    );
    
  }
}