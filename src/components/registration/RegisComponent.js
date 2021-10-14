/* eslint-disable prettier/prettier */

import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useState} from 'react/cjs/react.development';
import styles from '../../styles/registration/regis';

const apiUsers = 'https://ez-json-demo.herokuapp.com/api/users';

const addUser = (phone, name, password) => {
  console.log(phone, password);
  fetch(apiUsers, {
    method: 'POST',
    body: JSON.stringify({
      username: phone,
      password: password,
      fullName: name,
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

const RegisComponent = ({navigation, route}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Tạo tài khoản</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.bodyText}>Vui lòng cho biết tên của bạn</Text>
        <TextInput
          style={styles.bodyTextInput}
          placeholder="Ít nhất 2 từ, không bao gồm kí tự đặc biệt"
          value={name}
          onChangeText={text => {
            setName(text);
          }}
        />
        <Text style={styles.bodyText}>Đặt mật khẩu</Text>
        <TextInput
          style={styles.bodyTextInput}
          placeholder="Từ 8 đến 32 kí tự, bao gồm số và chữ"
          value={password}
          onChangeText={text => {
            setPassword(text);
          }}
        />
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => {
            addUser(route.params.phone, name, password);
            navigation.popToTop();
          }}>
          <Text style={styles.footerButtonText}>Tạo tài khoản</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisComponent;
