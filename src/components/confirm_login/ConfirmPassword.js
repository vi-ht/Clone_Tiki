/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from '../../styles/confirm_login/password';

const apiUsers = 'https://ez-json-demo.herokuapp.com/api/users';

const ConfirmPasswordComponent = ({navigation, route}) => {
  const [password, setPassword] = useState('');
  const [checkPass, setCheckPass] = useState(false);
  const [emptyPass, setEmptyPass] = useState(false);

  const getPassword = () => {
    fetch(apiUsers)
      .then(res => res.json())
      .then(resJson => {
        resJson.forEach(element => {
          if (element.password === password) {
            navigation.replace('ProfileComponent');
          } else {
            setCheckPass(true);
          }
        });
      })
      .catch(error => {
        console.log('Error: ', error);
      });
  };
  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText1}>Nhập mật khẩu</Text>
        <Text style={styles.headerText2}>
          Vui lòng nhập mật khẩu Tiki của số điện thoại{' '}
        </Text>
        <Text style={styles.headerText3}>{route.params.phone}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <TextInput
          style={styles.bodyTextInput}
          placeholder="Mật khẩu"
          onChangeText={text => {
            if (text.length === 0){
              setEmptyPass(true);
            }
            setPassword(text);
          }}
          value={password}
          placeholderTextColor="#c3c3c3"
        />
        {checkPass && !emptyPass ? (
          <Text style={styles.bodyText}> Thông tin đăng nhập không đúng</Text>
        ) : (
          <Text />
        )}
        {emptyPass ? (
          <Text style={styles.bodyText}> Vui lòng nhập mật khẩu của bạn</Text>
        ) : (
          <Text />
        )}
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity
          style={styles.footerButton1}
          onPress={() => {
            getPassword();
            setEmptyPass(false);
          }}>
          <Text style={styles.footerText1}>Đăng nhập</Text>
        </TouchableOpacity>
        <View style={styles.footerText2Container}>
          <TouchableOpacity style={styles.footerButton2}>
            <Text style={styles.footerText2}>Quên mật khẩu?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton2}>
            <Text style={styles.footerText2}>Đăng nhập bằng SMS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ConfirmPasswordComponent;
