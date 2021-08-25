/* eslint-disable prettier/prettier */
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {
  faFacebook,
  faGoogle,
  faPaypal,
} from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/login';

const LoginComponent = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.headerContainer}>
        <Image
          source={require('../asserts/HeaderLogin.jpg')}
          style={styles.imageHeader}
        />
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.welcomeText}>Xin chào, </Text>
        <Text style={styles.loginText}>Đăng nhập hoặc Tạo tài khoản</Text>
        <TextInput style={styles.inputText} placeholder="Số điện thoại" />
        <TouchableOpacity style={styles.buttonNext}>
          <Text style={styles.buttonText}>Tiếp Tục</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginEmail}>
          <Text style={styles.loginEmailText}>Đăng nhập bằng email</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.footerText1}>Hoặc tiếp tục bằng</Text>
        <View style={styles.brandIconsContainer}>
          <TouchableOpacity style={styles.brandIcon1}>
            <FontAwesomeIcon icon={faFacebook} size={38} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.brandIcon2}>
            <FontAwesomeIcon icon={faGoogle} size={38} color="red" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.brandIcon3}>
            <FontAwesomeIcon icon={faPaypal} size={38} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.footerText2}>
          Bằng việc tiếp tục, bạn đã chấp nhận
        </Text>
        <TouchableOpacity>
          <Text style={styles.footerText3}>điều khoản sử dụng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginComponent;
