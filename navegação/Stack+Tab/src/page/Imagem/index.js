import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button,Image,ScrollView } from 'react-native';


export default function Fotos({ navigation }) {
  return (
    <View flex={1} style={{ justifyContent: "flex-start" }}>
      <ScrollView>
      <View style={{paddingTop:10}}>
      <Text style={{fontSize:30, alignSelf:"flex-start"}} >Gato</Text>
       <Image source={{ uri: "https://petcare.com.br/centroveterinario/wp-content/uploads/2013/04/guia1.jpg" }}
                style={{alignSelf:"flex-start", height:200, width:190}}
              />
              </View>
              <View style={{paddingTop:10}}>
      <Text style={{fontSize:30, alignSelf:"flex-start"}} >Gato</Text>
       <Image source={{ uri: "https://petcare.com.br/centroveterinario/wp-content/uploads/2013/04/guia1.jpg" }}
                style={{alignSelf:"flex-start", height:200, width:190}}
              />
              </View>
              <View style={{paddingTop:10}}>
      <Text style={{fontSize:30, alignSelf:"flex-start"}} >Gato</Text>
       <Image source={{ uri: "https://petcare.com.br/centroveterinario/wp-content/uploads/2013/04/guia1.jpg" }}
                style={{alignSelf:"flex-start", height:200, width:190}}
              />
              </View>
              <View style={{paddingTop:10}}>
      <Text style={{fontSize:30, alignSelf:"flex-start"}} >Gato</Text>
       <Image source={{ uri: "https://petcare.com.br/centroveterinario/wp-content/uploads/2013/04/guia1.jpg" }}
                style={{alignSelf:"flex-start", height:200, width:190}}
              />
              </View>
              </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
