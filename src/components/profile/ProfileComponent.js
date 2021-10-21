/* eslint-disable prettier/prettier */
import {
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { StatusBar, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import HeaderProfile from './HeaderProfileComponent';
import styles from '../../styles/profile/profile';
import { dataFirst, dataSecond, dataDonHang, dataQuanTam, dataTienIch } from '../../assets/data/Profile';
import tikixu from '../../assets/image/debd9ea3df3916674f28.jpg';
import voucher from '../../assets/image/voucher.jpg';
import myAvatar from '../../assets/image/vi.jpg';

const ProfileItem = ({ icon, name }) => (
  <View style={styles.itemContainer}>
    <Image source={icon} style={styles.profileIcon} />
    <Text style={styles.itemTitle}>{name}</Text>
    <FontAwesomeIcon icon={faAngleRight} size={26} color="gray" />
  </View>
);

const SectionItem = ({ nameLeft, nameRight, list }) => (
  <View style={styles.sectionContainer}>
    <View style={styles.innerContainer}>
      <Text style={styles.itemText}>{nameLeft}</Text>
      <Text style={styles.itemHistory}>{nameRight}</Text>
    </View>
    <View style={styles.boxContainer}>
      {list.map((e, index) => (
          <View style={styles.iconContainer}>
              <Image source={e.iconImg} style={styles.imgIcon} />
          <Text style={styles.iconText}>{e.name}</Text>
      </View>
      ))}
      </View>
  </View>
);

const TopItem = ({ img, title, name }) => (
  <View style={styles.tikiXuContainer}>
            <View style={styles.icon}>
              <Image source={img} style={styles.img} />
            </View>
            <View style={styles.title}>
              <Text style={styles.titleText}>{title}</Text>
              <Text style={styles.titleSmallText}>{name}</Text>
            </View>
          </View>
);

const ProfileComponent = ({ navigation }) => {
  return (
    <ScrollView>
    <View style={styles.screenContainer}>
      <StatusBar barStyle="light-content" />
      <HeaderProfile title="" />
      <View style={styles.bodyContainer}>
        <View style={styles.userContainer}>
          <View style={styles.avatarContainer}>
          <Image source={myAvatar} style={styles.avatar} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>Huỳnh Thị Thanh Vi</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SettingComponent');
              }}>
              <Text style={styles.authText}>+ thêm Nickname</Text>
            </TouchableOpacity>
          </View>
          <FontAwesomeIcon icon={faAngleRight} size={26} color="#1e88e5" />
        </View>
        <View style={styles.container}>
          <TopItem img={tikixu} title="Tiki xu" name="Tìm thêm"/>
          <TopItem img={voucher} title="Mã giảm giá" name="Tìm thêm"/>
        </View>
        {dataDonHang.map((e, index) => (
          <SectionItem 
          key={index}
          nameLeft = {e.nameLeft} 
          nameRight = {e.nameRight}
          list = {e.iconList}/>
        ))}
        {dataFirst.map((e, index) => (
          <View><ProfileItem key={index} icon={e.icon} name={e.name} />
          <View style={styles.divider} />
          </View>
        ))}
        {dataQuanTam.map((e, index) => (
          <SectionItem 
          key={index}
          nameLeft = {e.nameLeft} 
          nameRight = {e.nameRight}
          list = {e.iconList}/>
          
        ))}
        {dataTienIch.map((e, index) => (
          <SectionItem 
          key={index}
          nameLeft = {e.nameLeft} 
          nameRight = {e.nameRight}
          list = {e.iconList}/>
          
        ))}
        {dataSecond.map((e, index) => (
          <View><ProfileItem key={index} icon={e.icon} name={e.name} />
          <View style={styles.divider}/>
          </View>
        ))}
      </View>
    </View>
    </ScrollView>
  );
};

export default ProfileComponent;
