import React, { Component } from "react"
import { View, Image,TouchableOpacity, ScrollView } from 'react-native';
import { TextInput,Text,Button } from 'react-native';
import { WebView } from 'react-native-webview';

import { FontAwesome } from '@expo/vector-icons';
import * as ScreenOrientation from 'expo-screen-orientation';

export default class Video extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Video'
      });
    
      componentDidMount() {
        
       
        
      }
      componentWillMount(){
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    }
    componentWillUnmount(){
      
    }

    
    
    render() {
      return <WebView
      javaScriptEnabled={true}
      source={{uri: 'https://www.youtube.com/embed/k1BhySXGyOw?rel=0'}}
  />;
    }
  }