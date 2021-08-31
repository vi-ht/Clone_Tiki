/* eslint-disable prettier/prettier */
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginComponent from '../components/LoginComponent';
import PasswordComponent from '../components/PasswordComponent';
import ProfileComponent from '../components/ProfileComponent';
import RegisComponent from '../components/RegisComponent';
const Stack = createStackNavigator();

const ProfileScreen = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="ProfileComponent" component={ProfileComponent} />
        <Stack.Screen name="LoginComponent" component={LoginComponent} />
        <Stack.Screen name="PasswordComponent" component={PasswordComponent} />
        <Stack.Screen name="RegisComponent" component={RegisComponent} />
      </Stack.Navigator>
    );
  };




export default ProfileScreen;
