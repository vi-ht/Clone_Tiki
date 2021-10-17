/* eslint-disable prettier/prettier */

import {
   faUser,
   faAngleRight,
   faQuestion,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { StatusBar, Text, View, TouchableOpacity } from 'react-native';
import Header from './HeaderComponent';
import styles from '../../styles/profile/profile';
import { dataFirst, dataSecond } from '../../assets/data/Profile';
import { Avatar } from 'react-native-elements';

const ProfileItem = ({ icon, name }) => (
   <View style={styles.itemContainer}>
      <FontAwesomeIcon icon={icon} size={26} color="#1e1e1e" />
      <Text style={styles.itemText}>{name}</Text>
      <FontAwesomeIcon icon={faAngleRight} size={26} color="#1e1e1e" />
   </View>
);

const ProfileComponent = ({ navigation, route }) => {
   if (route.params !== undefined) {
      console.log(route.params.props.additionalUserInfo.profile.email);
      console.log(route.params.props.additionalUserInfo.profile.name);
      console.log(route.params.props.additionalUserInfo.profile.picture);
   }

   return (
      <View style={styles.screenContainer}>
         <StatusBar barStyle="light-content" />
         <Header title="Cá nhân" />
         <View style={styles.bodyContainer}>
            {
               (route.params === undefined) ?
                  (
                     <View style={styles.userContainer}>
                        <View style={styles.avatarContainer}>
                           <FontAwesomeIcon icon={faUser} size={26} color="#fff" />
                        </View>
                        <View style={styles.textContainer}>
                           <Text style={styles.welcomeText}>Chào mừng bạn đến với Tiki</Text>
                           <TouchableOpacity
                              onPress={() => {
                                 navigation.navigate('LoginComponent');
                              }}>
                              <Text style={styles.authText}>Đăng nhập/ Đăng ký</Text>
                           </TouchableOpacity>
                        </View>
                        <FontAwesomeIcon icon={faAngleRight} size={26} color="#1e88e5" />
                     </View>
                  )
                  :
                  (
                     <View>
                        <View style={styles.userContainer}>
                           <Avatar
                              rounded
                              size="medium"
                              source={{
                                 uri: route.params.props.additionalUserInfo.profile.picture,
                              }}
                           />
                           <View style={styles.textContainer}>
                              <Text style={styles.welcomeText}>Chào mừng, {route.params.props.additionalUserInfo.profile.name}</Text>
                           </View>
                        </View>
                     </View>
                  )
            }

            {dataFirst.map((e, index) => (
               <ProfileItem key={index} icon={e.icon} name={e.name} />
            ))}
            <View style={styles.divider} />
            {dataSecond.map((e, index) => (
               <ProfileItem key={index} icon={e.icon} name={e.name} />
            ))}
            <View style={styles.divider} />
            <ProfileItem icon={faQuestion} name="Hỗ trợ" />
         </View>
      </View>
   );
};

export default ProfileComponent;
