import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';

import * as firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './Components/auth/Landing'
import Register from './Components/auth/Register'

const firebaseConfig = {
  apiKey: "AIzaSyDGwv7VxatRiwK0GdxNh-ycV6H4czdGjJc",
  authDomain: "memory-box-mobile.firebaseapp.com",
  projectId: "memory-box-mobile",
  storageBucket: "memory-box-mobile.appspot.com",
  messagingSenderId: "1038231219439",
  appId: "1:1038231219439:web:da07ab362d57edc3b8ff1a"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

import React, { Component } from 'react'

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
    }
  }
    
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false}}/>
          <Stack.Screen name="Register" component={Register}/>
        </Stack.Navigator>
      </NavigationContainer>

    ); 
  }
}

export default App
