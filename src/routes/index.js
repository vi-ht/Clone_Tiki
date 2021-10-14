/* eslint-disable prettier/prettier */
import React from 'react';
import {HomeScreen, ProfileScreen, NotificationScreen} from '../container/index';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBell, faHome, faUser} from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        defaultScreenOptions={{
          tabBarActiveTintColor: '#157cdb',
          tabBarInactiveTintColor: '#262626',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Trang Chủ',
            headerShown: false,
            tabBarIcon: ({color}) => (
              <FontAwesomeIcon icon={faHome} size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Cá nhân',
            headerShown: false,
            tabBarIcon: ({color}) => (
              <FontAwesomeIcon icon={faUser} size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Thông Báo"
          component={NotificationScreen}
          options={{
            tabBarLabel: 'Thông báo',
            headerShown: false,
            tabBarIcon: ({color}) => (
              <FontAwesomeIcon icon={faBell} size={26} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
