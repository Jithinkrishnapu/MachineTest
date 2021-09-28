

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './Src/Route';

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