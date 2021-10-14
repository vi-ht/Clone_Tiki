/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const stylesItem = StyleSheet.create({
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
});

export default stylesItem;
