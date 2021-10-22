
  import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
  import React from 'react';
  import { StatusBar, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
  import styles from '../../styles/profile/profile';
  import { dataFirst} from '../../assets/data/Profile';
  import {
    faUser,
    faAngleRight,
  } from '@fortawesome/free-solid-svg-icons';
    import Header from '../profile/HeaderComponent';

  const ProfileItem = ({value}) => (
    <View style={styles.itemSetting}>
        <View style={styles.itemSmallContainer1}>
        <FontAwesomeIcon icon={faUser} size={22} color="gray" />
        </View>
        <View style={styles.itemSmallContainer2}>
        <Text style={styles.itemTitle}>Họ & tên</Text>
      <Text style={styles.itemValue}>{value}</Text>
        </View>
        <View style={styles.itemSmallContainer3}>
        <FontAwesomeIcon icon={faAngleRight} size={26} color="gray" />
        </View>
        </View>
      
  );

  const SettingComponent = ({ navigation, route }) => {
    //  console.log(route.params.value);
    return (
      <ScrollView>
          <Header title="Thônng tin tài khoản" />
          <View>
            <View style={styles.divider} />
                <TouchableOpacity
                onPress={() => {
                    navigation.navigate('ModifyComponent',{value:`${route.params.value}`});
                }}>
                <ProfileItem value={route.params.value}/>
                </TouchableOpacity>
            <View style={styles.divider} />
          </View>
      </ScrollView>
    );
  };
  
  export default SettingComponent;
  
  