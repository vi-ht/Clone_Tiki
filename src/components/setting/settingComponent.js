
  import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
  import React from 'react';
  import { StatusBar, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
  import HeaderProfile from './HeaderProfileComponent';
  import styles from '../../styles/profile/profile';
  import { dataFirst, dataSecond, dataDonHang, dataQuanTam, dataTienIch } from '../../assets/data/Profile';

  
  const ProfileItem = ({ icon, name }) => (
    <View style={styles.itemContainer}>
      <Image source={icon} style={styles.profileIcon} />
      <Text style={styles.itemTitle}>{name}</Text>
      <FontAwesomeIcon icon={faAngleRight} size={26} color="gray" />
    </View>
  );

  const SettingComponent = ({ navigation }) => {
    return (
      <ScrollView>
      
      </ScrollView>
    );
  };
  
  export default SettingComponent;
  