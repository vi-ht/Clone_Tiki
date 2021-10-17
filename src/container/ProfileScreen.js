/* eslint-disable prettier/prettier */
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {LoginComponent} from '../components/login/index';
import {ConfirmPasswordComponent} from '../components/confirm_login/index';
import {ProfileComponent} from '../components/profile/index';
import {RegisComponent} from '../components/registration/index';
const Stack = createStackNavigator();

const ProfileScreen = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="ProfileComponent" component={ProfileComponent} />
        <Stack.Screen name="LoginComponent" component={LoginComponent} />
        <Stack.Screen name="PasswordComponent" component={ConfirmPasswordComponent} />
        <Stack.Screen name="RegisComponent" component={RegisComponent} />
<<<<<<< Updated upstream
=======
        <Stack.Screen name="AfterLoginComponent" component={ProfileComponent} />
>>>>>>> Stashed changes
      </Stack.Navigator>
    );
  };




export default ProfileScreen;
