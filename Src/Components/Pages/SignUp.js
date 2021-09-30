import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard
} from 'react-native';





import Login from './Login';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

function NavRules({navigation}) {
    return (
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="login"  component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default class Signup extends Component {

  constructor(props){
    super(props);
    this.state={
        email:'',
        password: ''
    }
}

saveData =async()=>{
    const {email,password} = this.state;
    //save data with asyncstorage
    let loginDetails={
        email: email,
        password: password
    }
        AsyncStorage.setItem('loginDetails', JSON.stringify(loginDetails));
        Keyboard.dismiss();
        alert("You successfully registered . Go to signin page and login with details Username: " + email + ' password: ' + password); 
}




    render() {
        const {navigation} = this.props
        return(
            <View style={styles.container}>
                <Text>{'\n'}</Text>
                <Text>{'\n'}</Text>
                <TextInput style={styles.inputBox}
                onChangeText={(email) => this.setState({email})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Username"
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={()=> this.password.focus()}/>
                
                <TextInput style={styles.inputBox}
                onChangeText={(password) => this.setState({password})} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor = "#002f6c"
                ref={(input) => this.password = input}
                />

                <TouchableOpacity style={styles.button}> 
                    <Text style={styles.buttonText} onPress={this.saveData}>SignUp</Text>
                </TouchableOpacity>
                <View style={styles.signupTextCont}> 
                    <Text style={styles.signupText}>Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('login')}><Text style={styles.signupButton}>Sign in</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    signupTextCont: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingVertical: 16,
      flexDirection: 'row'
    },
    signupText: {
      color: '#12799f', 
      fontSize:16
    },
    signupButton: {
        color: '#12799f',
        fontSize:16,
        fontWeight: '500'
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