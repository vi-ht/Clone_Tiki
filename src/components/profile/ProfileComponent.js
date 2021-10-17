/* eslint-disable prettier/prettier */

import {
   faUser,
   faAngleRight,
   faQuestion,
   faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
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

const ProfileComponent = ({ navigation }) => {
   const [userGoogleInfo, setUserGoogleInfo] = useState(null);
   return (
      <View style={styles.screenContainer}>
         <StatusBar barStyle="light-content" />
         <Header title="Cá nhân" />
         <View style={styles.bodyContainer}>
            {
               (userGoogleInfo === null) ?
                  (
                     <View style={styles.userContainer}>
                        <View style={styles.avatarContainer}>
                           <FontAwesomeIcon icon={faUser} size={26} color="#fff" />
                        </View>
                        <View style={styles.textContainer}>
                           <Text style={styles.welcomeText}>Chào mừng bạn đến với Tiki</Text>
                           <TouchableOpacity
                              onPress={() => {
                                 navigation.navigate('LoginComponent', {
                                    returnData: (item) => setUserGoogleInfo(item),
                                 });
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
                                 uri: userGoogleInfo.additionalUserInfo.profile.picture,
                              }}
                           />
                           <View style={styles.textContainer}>
                              <Text style={styles.welcomeText}>Chào mừng, {userGoogleInfo.additionalUserInfo.profile.name}</Text>
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
            {(userGoogleInfo !== null) ?
               (
                  <View>
                     <TouchableOpacity
                        onPress={() => {
                           setUserGoogleInfo(null);
                        }}
                     >
                        <ProfileItem icon={faSignOutAlt} name="Đăng xuất" />
                     </TouchableOpacity>
                  </View>
               ) : null}
         </View>
      </View>
   );
};

export default ProfileComponent;
