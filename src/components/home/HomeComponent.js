/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  ScrollView,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {FlatList} from 'react-native-gesture-handler';
import {stylesHome, stylesItem, stylesFilter} from '../../styles/home/index';
import renderItem from './ProductItem';
import section_banner from '../../assets/image/Banner.png';
import { apiGetProduct } from '../../assets/constant/api';

const HomeComponent = ({navigation}) => {
  const [foodsFromServer, setFoodsFromServer] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    getProduct();
    return () => {};
  }, []);

  const getProduct = () => {
    fetch(apiGetProduct)
      .then(res => res.json())
      .then(resJson => {
        setFoodsFromServer(resJson);
      })
      .catch(error => {
        console.log('Error: ', error);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <View>
      <ScrollView>
        <StatusBar barStyle="light-content" />
        {/* Header */}
        <View style={stylesHome.default.headerContainer}>
          <View style={stylesHome.default.inputContainer}>
            <FontAwesomeIcon icon={faSearch} size={24} color="#969696" />
            <TextInput
              multiline
              onChangeText={text => setSearchValue(text)}
              value={searchValue}
              style={stylesHome.default.inputText}
              placeholder="Bạn tìm gì hôm nay"
              onPressIn={() => {
                navigation.navigate('SearchComponent');
              }}
            />
          </View>
          <View style={stylesHome.default.cartContainer}>
            <FontAwesomeIcon icon={faShoppingCart} size={24} color="#fff" />
          </View>
        </View>
        {/* Body */}
        <View style={stylesHome.default.bodyContainer}>
          <View style={stylesHome.default.sectionContainer}>
            <Text style={stylesHome.default.sectionTitle}>Điện thoại - Máy Tính</Text>
            <Image source={section_banner} style={stylesHome.default.sectionImage} />
            <ScrollView horizontal={true}>
              <View style={stylesFilter.default.filterContainer}>
                {[
                  'Tất cả',
                  'Điện thoại SmartPhone',
                  'Máy tính bảng',
                  'Điện thoại',
                ].map((e, index) => (
                  <View
                    key={index.toString()}
                    style={
                      index === 0
                        ? stylesFilter.default.filterActiveButtonContainer
                        : stylesFilter.default.filterInactiveButtonContainer
                    }>
                    <Text
                      style={
                        index === 0
                          ? stylesFilter.default.filterActiveText
                          : stylesFilter.default.filterInactiveText
                      }>
                      {e}
                    </Text>
                  </View>
                ))}
              </View>
            </ScrollView>
            {isLoading ? (
              <ActivityIndicator />
            ) : (
              <View style={stylesItem.default.listItemContainer}>
                <FlatList
                  horizontal={true}
                  data={foodsFromServer}
                  renderItem={renderItem}
                  keyExtractor={item => `key-${item.id}`}
                />
              </View>
            )}
            <View style={stylesHome.default.seeMoreContainer}>
              <Text style={stylesHome.default.seeMoreText}>Xem thêm 500 Sản Phẩm</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeComponent;
