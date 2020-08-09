import React, { Component } from "react"
import { View, Image,TouchableOpacity, ScrollView } from 'react-native';
import { TextInput,Text,Button } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

export default class SobreNos extends Component {
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
                 <Text>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</Text>
                  </ScrollView>
          </View>
          
          
        );
        
      }
    }