import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Marker,Polyline  } from 'react-native-maps';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
<View>
    <MapView
    style={styles.mapStyle}
    initialRegion={{
    latitude: -23.5756442,
    longitude: -46.7089406,
    latitudeDelta: 0.000,
    longitudeDelta: 0.007
    }}
    >
        <Marker coordinate = {{latitude: -23.5756442,longitude: -46.7089406}}
         pinColor = {"green"} // any color
         title={"Eu"}
         image={require('./assets/person.png')}
         description={"Go go"}/>
          <Marker coordinate = {{latitude: -23.5715,longitude: -46.7087}}
         pinColor = {"red"} // any color
         title={"Chegada"}/>
           <Marker coordinate = {{latitude: -23.5767452,longitude: -46.7089416}}
         pinColor = {"yellow"} // any color
         title={"pessoa"}
         image={require('./assets/person.png')}
         description={"Go go"}/>
         <Polyline
		coordinates={[
			{ latitude: -23.5756442, longitude: -46.7089406 },
			{ latitude: -23.5715, longitude: -46.7087 }
		]}
		strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
		
		]}
		strokeWidth={6}
	/>
    </MapView>
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
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  
});