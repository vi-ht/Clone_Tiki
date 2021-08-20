/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Button,
  ActivityIndicator,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
// import {FlatList} from 'react-native-gesture-handler';
// import getProductFromServer from '../Networking/ProductAPI';

const section_banner = require('../asserts/Banner.png');
const width = Dimensions.get('window').width;
const apiGetProduct = 'https://fakestoreapi.com/products?limit=10';
const ProductItem = ({image, name, price}) => {
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
export const BodyComponent = props => {
  const [foodsFromServer, setFoodsFromServer] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    getProduct();
    return () => {};
  }, [foodsFromServer]);

  let getProduct = () => {
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

  function log2() {
    console.log(foodsFromServer);
  }

  let renderItem = ({item, index}) => {
    return (
      <View>
        <ProductItem
          name={item.title}
          image={{uri: item.image}}
          price={item.price + '$'}
        />
      </View>
    );
  };

  return (
    <View>
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
          <Button onPress={log2} title="hihi" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    backgroundColor: '#fff',
  },
  sectionContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
  },
  sectionTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: '#2f2f2f',
    marginVertical: 12,
  },
  sectionImage: {
    width: width - 24,
    height: 130,
    borderRadius: 4,
  },
  // Item
  listItemContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  itemContainer: {
    width: 100,
    marginRight: 12,
  },
  itemImage: {
    width: 100,
    height: 120,
  },
  itemName: {
    fontSize: 14,
    color: '#484848',
    marginVertical: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2a2a2a',
  },
  // filter
  filterContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  filterActiveButtonContainer: {
    backgroundColor: '#242424',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginRight: 10,
  },
  filterInactiveButtonContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    borderColor: '#5a5a5a',
    borderWidth: 1,
    marginRight: 10,
  },
  filterActiveText: {
    color: '#fff',
  },
  filterInactiveText: {
    color: '#5a5a5a',
  },
  // see more
  seeMoreContainer: {
    marginTop: 10,
    padding: 12,
    borderTopWidth: 0.6,
    borderTopColor: '#ededed',
    alignItems: 'center',
  },
  seeMoreText: {
    color: '#0e45b4',
  },
});
