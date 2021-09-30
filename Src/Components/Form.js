import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';


import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const userInfo = {username :'admin',password :'123456'}


const Stack = createNativeStackNavigator();

function NavRules({navigation}) {
    return (
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="signup"  component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default class Form extends Component {

    constructor(props){
        super(props);
        this.state={
            username:'',
            password: ''
        }
    }

   

    render() {
        return(
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                onChangeText={(username) => this.setState({username})}
                value={this.state.username}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Email"
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={()=> this.password.focus()}/>
                
                <TextInput style={styles.inputBox}
                onChangeText={(password) => this.setState({password})} 
                value={this.state.password}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor = "#002f6c"
                ref={(input) => this.password = input}
                />

                <TouchableOpacity style={styles.button}> 
                    <Text style={styles.buttonText} onPress={this._login}>Login</Text>
                </TouchableOpacity>
            </View>
            
        )
    }
    _login =async()=>{
     
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox: {
        width: 300,
        backgroundColor: '#eeeeee', 
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#002f6c',
        marginVertical: 10
    },
    button: {
        width: 300,
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