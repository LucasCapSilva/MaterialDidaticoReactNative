
import React, { Component } from "react"
import { WebView } from 'react-native-webview';
import { StyleSheet, View } from 'react-native';
export default class Video extends Component {
  static navigationOptions = ({ navigation }) => ({
      title: 'Video'
    });
    render() {
      return (
        <View style={styles.Container}>
          <WebView
            style={ styles.WebViewStyle }
            source={{ html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/MFdTo_18e10" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' }}
            javaScriptEnabled={true}
            allowsInlineMediaPlayback={true}
            domStorageEnabled={true}   
          />
        </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      Container: {
        flex: 1,
      },
      WebViewStyle: {
       
      }
    });
