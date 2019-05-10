import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, PermissionsAndroid, Alert,Image } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps


export default class MarkerCar extends Component {

    constructor() {
        super()
        
        //10.421947, -75.547602 #1
        //10.422053, -75.547768 #2
        //10.422195, -75.547947 #3
        //10.422406, -75.548190 #4
        //10.422598, -75.548389 #5
        //10.422762, -75.548421 #6
        //10.422965, -75.548023 #7
        //10.423101, -75.547706 #8
        //10.423236, -75.547355 #9
        //10.423387, -75.546972 #10
        //10.423530, -75.546594 #11
        //10.423501, -75.546342 #12
        //10.423230, -75.546348 #13
        //10.422928, -75.546354 #14
        //10.422480, -75.546363 #15
        //10.422037, -75.546363 #16
        //10.421994, -75.546838 #17
        //10.421905, -75.547516 #18

        


        const carPos = [
            {
                //#1
                latitude: 10.421947,
                longitude: -75.547602
            },
            {
                //#2
                latitude: 10.422053,
                longitude: -75.547768
            },
            {
                //#3
                latitude: 10.422195,
                longitude: -75.547947
            },
            {
                //#4
                latitude: 10.422406,
                longitude: -75.548190
            },
            {
                //#5
                latitude: 10.422598,
                longitude: -75.548389
            },
            {
                //#6
                latitude: 10.422762,
                longitude: -75.548421
            },
            {
                //#7
                latitude: 10.422965,
                longitude: -75.548023
            },
            {
                //#8
                latitude: 10.423101,
                longitude: -75.547706
            },
            {
                //#9
                latitude: 10.423236,
                longitude: -75.547355
            },
            {
                //#10
                latitude: 10.423387,
                longitude: -75.546972
            },
            {
                //#11
                latitude: 10.423530,
                longitude: -75.546594
            },
            {
                //#12
                latitude: 10.423501,
                longitude: -75.546342
            },
            {
                //#13
                latitude: 10.423230,
                longitude: -75.546348
            },
            {
                //#14
                latitude: 10.422928,
                longitude: -75.546354
            },
            {
                //#15
                latitude: 10.422480,
                longitude: -75.546363
            },
            {
                //#16
                latitude: 10.422037,
                longitude: -75.546363
            },
            {
                //#17
                latitude: 10.421994,
                longitude: -75.546838
            },
            {
                //#18
                latitude: 10.421905,
                longitude: -75.547516
            }
        ]

        this.state = {
            count: 0,
            markers: [{
                latitude: 0.0,
                longitude: 0.0
            }]
        }

        var i = 0;
        setInterval(() => {

            i++;
            //console.log(carPos[i].latitude)
            if (i > 17) {
                i = 0;
            } else {
                this.setState({
                    count: i,
                    markers: [{
                        latitude: carPos[i].latitude,
                        longitude: carPos[i].longitude
                    }]
                })
            }

        }, 1000)

    }


    render() {
        return (
            <View>

                {this.state.markers.map(item => (
                    <MapView.Marker.Animated
                        key={item.latitude}
                        
                        anchor={{x:0.45,y:0.42}}
                        coordinate={{
                            latitude: parseFloat(item.latitude),
                            longitude: parseFloat(item.longitude)
                        }}
                        style={{transform: [{rotate: '50deg'}]}}
                        ref = {marker => {this.marker = marker} }>

                        <Image
                            source = {require('../assets/img/car.png')}
                            style = {{width: 42, height: 42}}
                        />

                    </MapView.Marker.Animated>
                       
                    
                ))

                }

            </View>
        )
    }


}


