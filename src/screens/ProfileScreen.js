/* eslint-disable prettier/prettier */
import { faUser, faAngleRight, faList, faCartArrowDown, faEye, faHeart, faBookmark, faStar, faAward, faCogs, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { StatusBar, Text, View, StyleSheet } from 'react-native';
import Header from '../components/HeaderComponent';

const ProfileItem = ({ icon, name }) => (
    <View style={styles.itemContainer}>
        <FontAwesomeIcon icon={icon} size={26} color="#1e1e1e" />
        <Text style={styles.itemText}>{name}</Text>
        <FontAwesomeIcon icon={faAngleRight} size={26} color="#1e1e1e" />
    </View>
);

const ProfileScreen = () => {
    return (
        <View style={styles.screenContainer}>
            <StatusBar barStyle="light-content" />
            <Header title="Cá nhân" />
            <View style={styles.bodyContainer}>
                <View style={styles.userContainer}>
                    <View style={styles.avatarContainer}>
                        <FontAwesomeIcon icon={faUser} size={26} color="#fff" />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.welcomeText}>Chào mừng bạn đến với Tiki</Text>
                        <Text style={styles.authText}>Đăng nhập/ Đăng ký</Text>
                    </View>
                    <FontAwesomeIcon icon={faAngleRight} size={26} color="#1e88e5" />
                </View>
                <View style={styles.divider} />
                    <ProfileItem icon={faList} name="Quản lý đơn hàng" />
                    <ProfileItem icon={faCartArrowDown} name="Sản phẩm đã mua" />
                    <ProfileItem icon={faEye} name="Sản phẩm đã xem" />
                    <ProfileItem icon={faHeart} name="Sản phẩm yêu thích" />
                    <ProfileItem icon={faBookmark} name="Sản phẩm mua sau" />
                    <ProfileItem icon={faStar} name="Sản phẩm đánh giá" />
                <View style={styles.divider} />
                    <ProfileItem icon={faAward} name="Ưu đãi cho chủ thẻ ngân hàng" />
                    <ProfileItem icon={faCogs} name="Cài đặt" />
                <View style={styles.divider} />
                    <ProfileItem icon={faQuestion} name="Hỗ trợ" />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
    },
    bodyContainer: {
        backgroundColor: '#ededed',
    },
    userContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 22,
        alignItems: 'center',
    },
    avatarContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1e88e5',
    },
    textContainer: {
        flex: 1,
        marginLeft: 20,
    },
    welcomeText: {
        color: '#828282',
    },
    authText: {
        color: '#1e88e5',
        fontSize: 18,
        fontWeight: '500',
    },
    itemContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
    },
    itemText: {
        flex: 1,
        color: '#1e1e1e',
        paddingLeft: 20,
    },
    divider: {
        height: 10,
    },
});

export default ProfileScreen;
