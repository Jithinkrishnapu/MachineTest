import React, { Component } from 'react';



import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login from './Components/Pages/Login';
import Signup from './Components/Pages/SignUp';

export default class Routes extends Component {
    render() {
        return (
      
            
                <Stack.Navigator barButtonIconStyle ={styles.barButtonIconStyle}
                hideNavBar={false} 
                navigationBarStyle={{backgroundColor: '#1565c0',}} 
                titleStyle={{color: 'white',}}>
                    <Stack.Screen
                    name="login"
                    component={Login}
                    options={{title:"Login"}}
                    />
                    <Stack.Screen
                    name="signup"
                    component={Signup}
                    options={{title:"Sign Up"}}
                    />
                </Stack.Navigator>
            
        )
    }
}

const styles = {
    barButtonIconStyle: {
        tintColor: 'white'
    }
}