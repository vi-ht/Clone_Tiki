/* eslint-disable prettier/prettier */
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
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
import styles from '../../styles/login/login';
import {apiUsers} from '../../assets/constant/api';

let checkExistAccount = true;
const getUsers = (phone, {navigation}) => {
  fetch(apiUsers)
    .then(res => res.json())
    .then(resJson => {
      resJson.forEach(element => {
        if (element.username === phone) {
          checkExistAccount = false;
        }
      });
      if (checkExistAccount === false) {
        navigation.navigate('PasswordComponent', {
          phone: phone,
        });
      } else {
        navigation.navigate('RegisComponent', {
          phone: phone,
        });
      }
    })
    .catch(error => {
      console.log('Error: ', error);
    });
};

const LoginComponent = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const [validPhone, setValidPhone] = useState(false);
  const REGEX_PHONE = /((09|03|07|08|05)+([0-9]{8})\b)/g;
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.headerContainer}>
        <Image
          source={require('../../assets/image/HeaderLogin.jpg')}
          style={styles.imageHeader}
        />
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.welcomeText}>Xin chào, </Text>
        <Text style={styles.loginText}>Đăng nhập hoặc Tạo tài khoản</Text>
        <TextInput
          style={validPhone ? styles.invalidInputText : styles.inputText}
          placeholder="Số điện thoại"
          onChangeText={text => setPhone(text)}
          value={phone}
          placeholderTextColor="#c3c3c3"
        />
        {validPhone ? (
          <Text style={styles.validText}>
            Số điện thoại không đúng định dạng
          </Text>
        ) : (
          <Text />
        )}
        <TouchableOpacity
          style={styles.buttonNext}
          onPress={() => {
            if (REGEX_PHONE.test(phone)) {
              getUsers(phone, {navigation});
            } else {
              setValidPhone(true);
            }
            checkExistAccount = true;
          }}>
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
