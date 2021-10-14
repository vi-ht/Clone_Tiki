/* eslint-disable prettier/prettier */
import {Image, Text, View} from 'react-native';
import React from 'react';
import {stylesItem} from '../../styles/home/index';

const ProductItem = ({image, name, price}) => {
  return (
    <View style={stylesItem.default.itemContainer}>
      <Image source={image} style={stylesItem.default.itemImage} />
      <Text style={stylesItem.default.itemName} numberOfLines={2}>
        {name}
      </Text>
      <Text style={stylesItem.default.itemPrice}>{price}</Text>
    </View>
  );
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

export default renderItem;
