/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import cartIcon from '../../assets/image/cart.png';
import settingIcon from '../../assets/image/setting.png';

const width = Dimensions.get('window').width;

const HeaderProfile = ({title}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
      <View style={styles.cartContainer}>
        <Image source={settingIcon} style={styles.img}/>
        <Image source={cartIcon} style={styles.img}/>
      </View>
    </View>
    
  );
};

export default HeaderProfile;

const HEADER_ICON_SIZE = 26;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#1A8CFF',
    justifyContent: 'center',
    paddingLeft: 80,
    height:100,
  },
  cartContainer: {
    marginTop:-35,
    marginLeft:70,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  cartContainer1: {
    backgroundColor: 'pink',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
    paddingLeft: width / 2.7,
  },
  img:{
    marginTop:4,
    marginLeft:1,
    height:27,
    width:27,
    marginRight:5,
  },
});
