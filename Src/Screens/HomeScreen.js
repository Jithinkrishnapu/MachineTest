import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';



export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.child1}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={this._logOut}>
            LogOut
          </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
  _logOut = async () => {
    await AsyncStorage.clear();
    this.props.navigation.pop();
  };
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent:'flex-start',
  },
  child1:{
    margin: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
  },
   button: {
    width: 100,
    backgroundColor: '#4f83cc',
    borderRadius: 25,
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
});
