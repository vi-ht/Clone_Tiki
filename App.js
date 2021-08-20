import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome, faUser} from '@fortawesome/free-solid-svg-icons';
import ProfileScreen from './src/screens/ProfileScreen';
import NotificateScreen from './src/screens/NotificateScreen';

const Tab = createBottomTabNavigator();

const App = () => {
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
          component={NotificateScreen}
          options={{
            tabBarLabel: 'Thông báo',
            headerShown: false,
            tabBarIcon: ({color}) => (
              <FontAwesomeIcon icon={faHome} size={26} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
