import React, { Component } from 'react';
import {
     StyleSheet, Text, View,
    Button, Alert,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';

import GetLocation from 'react-native-get-location';
import Geocoder from 'react-native-geocoder';

Geocoder.fallbackToGoogle('AIzaSyDDiihOeHlzR-1zqG1bbI_KXMbig7Y5LYg');



export default class HomeScreen extends Component {
  
  constructor(props){
    super(props);
  }

    state = {
        location: null,
        loading: false,
        adreess:null,
    }

    _requestLocation = () => {
        this.setState({ loading: true, location: null });
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 150000,
        })
            .then(location => {
                this.setState({
                    location,
                    loading: false,
                });
            })
            .catch(ex => {
                const { code, message } = ex;
                console.warn(code, message);
                if (code === 'CANCELLED') {
                    Alert.alert('Location cancelled by user or by another request');
                }
                if (code === 'UNAVAILABLE') {
                    Alert.alert('Location service is disabled or unavailable');
                 }
                if (code === 'TIMEOUT') {
                    Alert.alert('Location request timed out');
                }
                if (code === 'UNAUTHORIZED') {
                    Alert.alert('Authorization denied');
                }
                this.setState({
                    location: null,
                    loading: false,
                });
               
            });
    }

    cityName=async(lat,lng)=>{
     var NY = {
        lat: lat,
        lng: lng
      }
      Geocoder.geocodePosition(NY).then(res => {
        this.setState({
          address:res[0]
        })
        // res is an Array of geocoding object (see below)
    })
    .catch(err => console.log(err))      
    }

    render() {
        const { location, loading,address } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to TestApp!</Text>
                {location?null:<Text style={styles.instructions}>To get location, press the button:</Text>}
                <View style={styles.button}>
                    <Button
                        disabled={loading}
                        title="Get Location"
                        onPress={this._requestLocation}
                    />
                </View>
                {loading ? (
                    <ActivityIndicator />
                ) : null}
                {loading ? (
                    alert('Location Accessed ')
                ) : null}
                 {address ? (
                    <Text style={styles.instructions}>
                        {JSON.stringify(address.formattedAddress)}
                    </Text>
                ) : <Text style={styles.instructions}>Click the button to view address:</Text>}
                
                <View style={styles.button}>
                    <Button
                        title="Decode address"
                        onPress={() => {
                            this.cityName(location.latitude,location.longitude)
                        }}
                    /> 
                </View>
                <View style={styles.row}>
                <TouchableOpacity style={styles.logOut}> 
                    <Text style={styles.buttonText} onPress={this.logOut}>Logout</Text>
                </TouchableOpacity>
                </View>
            </View>
        );
    }
    logOut=()=>{
      this.props.navigation.pop();
    }
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
  },
  instructions: {
      textAlign: 'center',
      color: '#333333',
      marginTop:10,
      marginBottom: 15,
  },
  welcome: {
      fontSize: 30,
      textAlign: 'center',
      margin: 20,
  },
  location: {
      color: '#333333',
      marginBottom: 15,
  },
  button: {
      marginBottom: 18,
      color:"#4f83cc"
  },
  row:{
    flexDirection:'row',
    justifyContent:'flex-end',
    
  } ,
    logOut: {
        width: 100,
        backgroundColor: '#4f83cc',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
});
