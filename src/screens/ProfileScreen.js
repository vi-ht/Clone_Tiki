/* eslint-disable prettier/prettier */
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginComponent from '../components/LoginComponent';
import ProfileComponent from '../components/ProfileComponent';
const Stack = createStackNavigator();

const ProfileScreen = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="ProfileComponent" component={ProfileComponent} />
        <Stack.Screen name="LoginComponent" component={LoginComponent} />
      </Stack.Navigator>
    );
  };




export default ProfileScreen;
