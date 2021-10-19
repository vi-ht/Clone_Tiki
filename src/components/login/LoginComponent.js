/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

import auth from '@react-native-firebase/auth';
import {
   GoogleSignin,
   GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

import {
   View,
   Text,
   Image,
   TextInput,
   TouchableOpacity,
   StatusBar,
} from 'react-native';
import styles from '../../styles/login/login';

const LoginComponent = ({ navigation, route  }) => {
   const [phone, setPhone] = useState('');
   const [validPhone, setValidPhone] = useState(false);

   async function onGoogleButtonPress() {
      GoogleSignin.configure({
         webClientId:
            '738278361557-7s01ai9dat52v2laukf05psr29m4u7bs.apps.googleusercontent.com',
      });
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // Sign-in the user with the credential
      await auth()
         .signInWithCredential(googleCredential)
         .then(credential => {
            console.log('Signin success');
            console.log(credential);
            route.params.returnData(credential);
            navigation.goBack();
         })
         .catch(error => {
            console.log(error);
         });
   }

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
            <TouchableOpacity style={styles.buttonNext}>
               <Text style={styles.buttonText}>Tiếp Tục</Text>
            </TouchableOpacity>
         </View>
         <View>
            <Text style={styles.footerText1}>Hoặc tiếp tục bằng</Text>
            <View style={styles.brandIconsContainer}>
               <GoogleSigninButton
                  size={GoogleSigninButton.Size.Wide}
                  color={GoogleSigninButton.Color.Dark}
                  style={styles.buttonGoogle}
                  onPress={() =>
                     onGoogleButtonPress()
                  }
               />
            </View>
            <Text style={styles.footerText2}>
               Bằng việc tiếp tục, bạn đã chấp nhận
            </Text>
            <TouchableOpacity>
               <Text style={styles.footerText3}>điều khoản sử dụng</Text>
            </TouchableOpacity>
         </View>
      </View>
   )
};

export default LoginComponent;
