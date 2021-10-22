
  import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
  import React from 'react';
  import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
  import styles from '../../styles/profile/profile';
  import { dataFirst} from '../../assets/data/Profile';
  import {
    faUser,
    faAngleRight,
  } from '@fortawesome/free-solid-svg-icons';
    import Header from '../profile/HeaderComponent';


  const ModifyComponent = ({ navigation, route }) => {
      const [text, onChangeText] = React.useState(`${route.params.value}`);
    return (
      <ScrollView>
          <Header title="Họ & Tên" />
          <View>
          <View style={styles.TextContainer}>
          <Text style={styles.itemNewText}>Họ & Tên</Text>
          <TextInput
            style={style.input}
            onChangeText={onChangeText}
            value={text}
          />
          <View style={styles.divider} />
                <TouchableOpacity
                onPress={() => {
                    navigation.navigate('ProfileComponent',{value:`${text}`});
                }}>
                  <Text style={styles.buttonText}>Lưu thay đổi</Text>
                </TouchableOpacity>
            <View style={styles.divider} />
          </View>
            
          </View>
      </ScrollView>
    );
  };

  const style = StyleSheet.create({
    input: {
      height: 40,
      margin: 15,
      borderWidth: 1,
      borderColor:'#D9D9D9',
      padding: 10,
      marginTop:2,
    },
  });
  
  export default ModifyComponent;
