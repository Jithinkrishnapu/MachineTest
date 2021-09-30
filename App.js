

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Routes from './Src/Route';
import HomeScreen from './Src/Screens/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();





export default class App extends Component   {
  render() {
    return (
      <NavigationContainer>
        <View style={styles.container}>
        <StatusBar
          backgroundColor="#002f6c" 
          barStyle="light-content"
        />
       <Routes/>
      </View>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});