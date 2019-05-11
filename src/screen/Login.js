import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    Platform,
    PermissionsAndroid
} from 'react-native';


export default class Login extends Component {
    static navigationOptions = {
        header: null,
      };

      componentDidMount = () => {
        requestCameraPermission();
      }

    press = () =>{
        this.props.navigation.navigate('MapStu')
    }

    render() {

        return (
            <ScrollView style={{ padding: 20 }}>
                <Text
                    style={{ fontSize: 27 }}>
                    Login
                </Text>
                <TextInput placeholder='Username' />
                <TextInput placeholder='Password' />
                <View style={{ margin: 7 }} />
                <Button
                    onPress={this.press}
                    title="Submit"
                />
            </ScrollView>
        )

    }

}

async function requestCameraPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        alert('You can use the camera');
      } else {
        alert('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }
