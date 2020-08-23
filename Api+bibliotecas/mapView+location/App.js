import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';

var minhaLat=""
var minhaLon=""

export default function App() {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  });

  let text = 'Waiting..';
  let minhaLat
  let minhaLon
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {

    minhaLat = parseFloat(JSON.stringify(location.coords.latitude));
    minhaLon = parseFloat(JSON.stringify(location.coords.longitude));
  }


  var latCar = -23.540676 + 0.0004
  var lonCar = -46.455967 + 0.0002

  var chegadaCarLat = -23.5715 
  var chegadaCarLon = -46.7087
  return (
    <View style={styles.container}>
      <View>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: minhaLat,
            longitude: minhaLon,
            latitudeDelta: 0.000,
            longitudeDelta: 0.005
          }}
        >
          <Marker coordinate={{ latitude: -23.540676, longitude: -46.455967 }}
            pinColor={"green"} // any color
            title={"Eu"}
            image={require('./assets/person.png')}
            description={"Esta indo para o metro Butantan"} />
          <Marker coordinate={{ latitude: chegadaCarLat, longitude: chegadaCarLon }}
            pinColor={"red"} // any color
            title={"Chegada"} />
          <Marker coordinate={{ latitude: latCar, longitude: lonCar }}
            pinColor={"yellow"} // any color
            title={"Carro"}
            
            image={require('./assets/car.png')}
            description={"Disponivel"}/>
          <Polyline
            coordinates={[
              { latitude: -23.540676, longitude: -46.455967 },
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
        <View>
          <Text style={styles.text}>Meu mapa</Text>
          <Text style={styles.textCordenadas}>Cordenadas</Text>
          <Text style={styles.textCordenadas}></Text>
          <Text style={styles.textCordenadas}>Latitude= {minhaLat}</Text>
          <Text style={styles.textCordenadas}>Logitude= {minhaLon}</Text>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: 470,
  },
  text: {
    alignSelf: "center",
    fontSize: 30
  },
  textCordenadas:{
    fontSize: 20,
    paddingLeft:10
  }

});