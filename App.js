import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView, Location, Permissions } from "expo";

import { mapStyle } from "./assets/mapStyles/strangerNightVision";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={'google'}
          style={styles.map}
          customMapStyle={mapStyle}
          showsCompass={false}
          initialRegion={{ latitude: 41.3916097, longitude: 2.1769906, latitudeDelta: 0.0043, longitudeDelta: 0.0034 }}
          showsUserLocation={true}
          followsUserLocation={true}
        >
        </MapView>
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
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
