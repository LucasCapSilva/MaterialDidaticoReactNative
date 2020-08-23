import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button,Image,ScrollView } from 'react-native';


export default function SobreNos({ navigation }) {
  return (
    <View flex={1} style={{ justifyContent: "flex-start" }}>
      <ScrollView>
      <View style={{paddingTop:10}}>
      <Text style={{fontSize:30, alignSelf:"flex-start"}} >Sobre Nos</Text>
       <Image source={{ uri: "https://petcare.com.br/centroveterinario/wp-content/uploads/2013/04/guia1.jpg" }}
                style={{alignSelf:"flex-start", height:200, width:190}}
              />
               <Text style={{fontSize:15, alignSelf:"flex-start"}} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
               <Text style={{fontSize:15, alignSelf:"flex-start"}} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
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
