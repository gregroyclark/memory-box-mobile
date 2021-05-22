import { StatusBar } from 'expo-status-bar';
import React from 'react';

import * as firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './Components/auth/Landing'

const firebaseConfig = {
  apiKey: process.env.RN_FIREBASE_API_KEY,
  authDomain: process.env.RN_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.RN_FIREBASE_PROJECT_ID,
  storageBucket: process.env.RN_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.RN_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.RN_FIREBASE_APP_ID
};

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>

  ); 
}

