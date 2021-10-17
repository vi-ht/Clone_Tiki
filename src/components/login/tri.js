/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import styles from '../../styles/login/login';

export default function tri({ route }) {
   console.log(route.params.props.additionalUserInfo.profile.email);
   console.log(route.params.props.additionalUserInfo.profile.name);
   console.log(route.params.props.additionalUserInfo.profile.picture);
   return (
      <View>
         <View style={styles.avatar}>
            <Avatar
               rounded
               size="large"
               source={{
                  uri: route.params.props.additionalUserInfo.profile.picture,
               }}
            />
         </View>
         <View style={styles.text}>
            <Text style={styles.welcomeText}>Xin chào, {route.params.props.additionalUserInfo.profile.name}</Text>
            <Text style={styles.loginText}>Email: {route.params.props.additionalUserInfo.profile.email}</Text>
         </View>
      </View>
   );
}
