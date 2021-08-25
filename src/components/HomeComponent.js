/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
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
import styles from '../styles/home';

const section_banner = require('../asserts/Banner.png');


export const ProductItem = ({image, name, price}) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={image} style={styles.itemImage} />
      <Text style={styles.itemName} numberOfLines={2}>
        {name}
      </Text>
      <Text style={styles.itemPrice}>{price}</Text>
    </View>
  );
};

export const HomeComponent = ({navigation}) => {
  const [foodsFromServer, setFoodsFromServer] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const apiGetProduct = 'https://ez-json-demo.herokuapp.com/api/product';

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
      .finally(() => setisLoading(false));
  };

  let renderItem = ({item, index}) => {
    return (
      <View>
        <ProductItem
          name={item.name}
          image={{uri: item.thumbnailUrl}}
          price={item.price + '$'}
        />
      </View>
    );
  };

  return (
    <View>
      <ScrollView>
        <StatusBar barStyle="light-content" />
        {/* Header */}
        <View style={styles.headerContainer}>
          <View style={styles.inputContainer}>
            <FontAwesomeIcon icon={faSearch} size={24} color="#969696" />
            <TextInput
              multiline
              onChangeText={text => setSearchValue(text)}
              value={searchValue}
              style={styles.inputText}
              placeholder="Bạn tìm gì hôm nay"
              onPressIn={() => {
                navigation.navigate('SearchComponent');
              }}
            />
          </View>
          <View style={styles.cartContainer}>
              <FontAwesomeIcon icon={faShoppingCart} size={24} color="#fff" />
            </View>
        </View>
        {/* Body */}
        <View style={styles.bodyContainer}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Điện thoại - Máy Tính</Text>
            <Image source={section_banner} style={styles.sectionImage} />
            <ScrollView horizontal={true}>
              <View style={styles.filterContainer}>
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
                        ? styles.filterActiveButtonContainer
                        : styles.filterInactiveButtonContainer
                    }>
                    <Text
                      style={
                        index === 0
                          ? styles.filterActiveText
                          : styles.filterInactiveText
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
              <View style={styles.listItemContainer}>
                <FlatList
                  horizontal={true}
                  data={foodsFromServer}
                  renderItem={renderItem}
                  keyExtractor={item => `key-${item.id}`}
                />
              </View>
            )}
            <View style={styles.seeMoreContainer}>
              <Text style={styles.seeMoreText}>Xem thêm 500 Sản Phẩm</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
