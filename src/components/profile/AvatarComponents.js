import {
    faUser,
    faAngleRight,
    faQuestion,
  } from '@fortawesome/free-solid-svg-icons';
  import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
  import React from 'react';
  import {StatusBar, Text, View, TouchableOpacity} from 'react-native';
  import HeaderProfile from './HeaderProfileComponent';
  import styles from '../../styles/profile/profile';
  import {dataFirst, dataSecond} from '../../assets/data/Profile';
const AvatarComponent = () => {
    return (
        <View style={styles.userContainer}>
            <View style={styles.avatarContainer}>
                <FontAwesomeIcon icon={faUser} size={26} color="#fff" />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.welcomeText}>Chào mừng bạn đến với Tiki</Text>
                <TouchableOpacity
                    onPress={() => {
                        // navigation.navigate('LoginComponent');
                    }}>
                    <Text style={styles.authText}>Đăng nhập/ Đăng ký</Text>
                </TouchableOpacity>
            </View>
            <FontAwesomeIcon icon={faAngleRight} size={26} color="#1e88e5" />
        </View>
    );
};
export default AvatarComponent;