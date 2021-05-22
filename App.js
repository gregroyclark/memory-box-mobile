import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';

import { View, Text } from 'react-native'

import * as firebase from 'firebase';

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

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './Components/auth/Landing'
import Register from './Components/auth/Register'

const Stack = createStackNavigator();

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true
        })
      }
    })
  }
    
  render() {
    const { loggedIn, loaded } = this.state;

    if (!loaded) {
      return (
        <View>
          <Text style={{ flex: 1, justifyContent: 'center' }}>
            Loading
          </Text>
        </View>
      )
    }

    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false}}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
      ); 
    }

    return (
      <View>
        <Text style={{ flex: 1, justifyContent: 'center' }}>
          User is logged in.
        </Text>
      </View>
    )
  }
}

export default App
