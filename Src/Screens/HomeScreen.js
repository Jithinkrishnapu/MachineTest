import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';






export default class HomeScreen extends Component{
render(){
return(
    <View style={styles.container}>
     <Text>Welcome</Text>
    </View>
)
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      justifyContent:'center'
    }
  });