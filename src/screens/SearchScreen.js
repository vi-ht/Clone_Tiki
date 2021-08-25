/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  ActivityIndicator,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from '../components/HomeStyles';
import {TextInput} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeft,
  faSearch,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import {ProductItem} from '../components/HomeComponent';
let apiGetProduct = 'https://ez-json-demo.herokuapp.com/api/product';

const SearchScreen = ({navigation}) => {
  const [searchValue, setSearchValue] = useState('');
  const [foodsFromServer, setFoodsFromServer] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    getProduct();
    return () => {};
  }, []);

  let getProduct = searchString => {
    fetch(apiGetProduct + searchString)
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
        <View style={styles.headerContainer}>
          <TouchableOpacity
          style={styles.backContainer}
            onPress={() => {
              navigation.replace('HomeComponent');
            }}>
            <FontAwesomeIcon icon={faArrowLeft} size={24} color="#fff" />
          </TouchableOpacity>
          <View style={styles.inputContainer}>
            <FontAwesomeIcon icon={faSearch} size={24} color="#969696" />
            <TextInput
              multiline
              onChangeText={text => setSearchValue(text)}
              value={searchValue}
              style={styles.inputText}
              placeholder="Bạn tìm gì hôm nay"
              onKeyPress={() => {
                let searchString = '?name_like=' + searchValue;
                getProduct(searchString);
              }}
            />
          </View>
          <View style={styles.cartContainer}>
              <FontAwesomeIcon icon={faShoppingCart} size={24} color="#fff" />
            </View>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.sectionContainer}>
            {isLoading ? (
              <ActivityIndicator />
            ) : (
              <View style={styles.listItemContainer}>
                <FlatList
                  horizontal={true}
                  data={foodsFromServer}
                  renderItem={renderItem}
                  keyExtractor={item => `key-${item.id}`}
                  onScroll={false}
                />
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
