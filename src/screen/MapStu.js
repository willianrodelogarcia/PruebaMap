import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, PermissionsAndroid, Alert } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import MarkerCar from '../components/MarkerCar';


export default class MapStu extends Component {

    

    static navigationOptions = {
        header: null,
      };

    constructor(props) {
        super(props);
        //requestCameraPermission();
        this.state = {
            region: {
                latitude: 0.0,
                longitude: 0.0,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            count: 0,
            latitude: 0.0,
            longitude: 0.0,
            markers: [{
                latitude: 10.423188,
                longitude: -75.546197
            },
            {
                latitude: 10.424919,
                longitude: -75.549137
            },
            {
                latitude: 10.425699,
                longitude: -75.551283
            }]

        };

        var i = 0;
        /*setInterval(() => {
          i += 3;
          this.setState({markers:[{
            latitude: 10.423188,
            longitude: -75.546197
          },
          {
            latitude: 10.424919,
            longitude: -75.549137
          },
          {
            latitude: 10.430420,  
            longitude: -75.514850
          }
        ]})
        }, 1000);*/

    }

    /*markers:[{
      latitude: 10.430420,  
      longitude: -75.514850
    }]*/

    

    onRegionChange = (region) => {
        //this.setState({ region });

    }

    componentDidMount = () => {
        //requestCameraPermission();
        navigator.geolocation.watchPosition(
            (position) => {
                console.log("wokeeey");
                console.log("POSITION", position);
                var region = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.007,
                    longitudeDelta: 0.007
                }
                this.setState({ region });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000 },
        );

    }

    
    render() {
        return (
            <View style={styles.container}>

                <MapView
                    provider={PROVIDER_GOOGLE}// remove if not using Google Maps
                    style={styles.map}
                    zoomEnabled={true}
                    rotateEnabled={false}
                    region={this.state.region}
                    showsCompass={true}
                    ref={(map) => { this.map = map }}
                    showsMyLocationButton={true}
                    //onRegionChange={this.onRegionChange}
                    showsUserLocation={true}

                >

                    <MarkerCar />
                </MapView>

                <Text>{this.state.error}</Text>
                <Text>{this.state.region.latitude}</Text>


            </View>
        );
    }
}



/**
 * {
            this.state.markers.map(item => (
              <MapView.Marker
                
                key={item.latitude}
                title={"AQUI"}
                coordinate={{
                  latitude: item.latitude,
                  longitude: item.longitude
                }} />
            ))
          }

          {
            latitude: 10.4229,
            longitude: -75.547,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }
 */


const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 100 + "%",
        width: 100 + "%",
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        //flex:1
    },
});