/* eslint-disable prettier/prettier */
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {LoginComponent} from '../components/login/index';
import {ConfirmPasswordComponent} from '../components/confirm_login/index';
import {ProfileComponent} from '../components/profile/index';
import {RegisComponent} from '../components/registration/index';
import { SettingComponent } from '../components/setting';
import {ModifyComponent} from '../components/Modify';
const Stack = createStackNavigator();

const ProfileScreen = () => {
  const [text, onChangeText] = React.useState('vi');
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen initialParams={{value:"Huỳnh Thị Thanh Vi"}} name="ProfileComponent" component={ProfileComponent}/>
        <Stack.Screen name="LoginComponent" component={LoginComponent} />
        <Stack.Screen name="PasswordComponent" component={ConfirmPasswordComponent} />
        <Stack.Screen name="RegisComponent" component={RegisComponent} />
        <Stack.Screen name="SettingComponent" component={SettingComponent} />
        <Stack.Screen name="ModifyComponent" component={ModifyComponent} />
      </Stack.Navigator>
    );
  };
  



export default ProfileScreen;
