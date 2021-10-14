/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, StatusBar, Text} from 'react-native';
import Header from '../components/profile/HeaderComponent';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome, faUndo, faDollarSign} from '@fortawesome/free-solid-svg-icons';
import {FlatList} from 'react-native-gesture-handler';

const NotificationItem = ({item}) => (
  <View style={styles.itemContainer}>
    <View style={styles.itemTopContainer}>
      <View
        style={[
          styles.itemTypeContainer,
          {
            backgroundColor: item.type === 1 ? 'red' : 'blue',
          },
        ]}>
        <FontAwesomeIcon
          icon={item.type === 1 ? faDollarSign : faUndo}
          color="#fff"
          size={22}
        />
      </View>
      <View style={styles.itemTopTextContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDate}>{item.date}</Text>
      </View>
    </View>
    <View>
      <Text style={styles.itemDetail}>{item.details}</Text>
    </View>
  </View>
);

const NotificationScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle="light-content" />
      <Header title="Thông Báo" />
      <View style={styles.bodyContainer}>
        <View>
          <View style={styles.buttonActiveContainer}>
            <View style={styles.activeMark} />
            <FontAwesomeIcon
              icon={faHome}
              color="#949494"
              size={24}
              style={styles.activeIcon}
            />
          </View>
          <View style={styles.buttonInactiveContainer}>
            <FontAwesomeIcon icon={faUndo} color="#949494" size={24} />
          </View>
          <View style={styles.buttonInactiveContainer}>
            <FontAwesomeIcon icon={faDollarSign} color="#949494" size={24} />
          </View>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={[
              {
                id: 1,
                type: 1,
                name: 'Anker Giảm khủng 40% Duy nhất hôm nay 13/11',
                date: '13/11/2018',
                details:
                  'Anker giảm khủng 40% Duy nhất hôm nay 13-11 Số lượng có hạn',
              },
              {
                id: 2,
                type: 2,
                name: 'GỢI Ý QUÀ TẶNG 20.10',
                date: '02/11/2018',
                details: 'NHẬP MÃ ƯU ĐÃI IT11 GIẢM 50K CHO ĐƠN HAGNF 700K',
              },
              {
                id: 3,
                type: 1,
                name: 'Anker Giảm khủng 40% Duy nhất hôm nay 13/11',
                date: '13/11/2018',
                details:
                  'Anker giảm khủng 40% Duy nhất hôm nay 13-11 Số lượng có hạn',
              },
              {
                id: 4,
                type: 2,
                name: 'GỢI Ý QUÀ TẶNG 20.10',
                date: '02/11/2018',
                details: 'NHẬP MÃ ƯU ĐÃI IT11 GIẢM 50K CHO ĐƠN HAGNF 700K',
              },
              {
                id: 5,
                type: 1,
                name: 'Anker Giảm khủng 40% Duy nhất hôm nay 13/11',
                date: '13/11/2018',
                details:
                  'Anker giảm khủng 40% Duy nhất hôm nay 13-11 Số lượng có hạn',
              },
              {
                id: 6,
                type: 2,
                name: 'GỢI Ý QUÀ TẶNG 20.10',
                date: '02/11/2018',
                details: 'NHẬP MÃ ƯU ĐÃI IT11 GIẢM 50K CHO ĐƠN HAGNF 700K',
              },
            ]}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <NotificationItem item={item} />}
          />
        </View>
      </View>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: '#ededed',
    flexDirection: 'row',
  },
  buttonActiveContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    height: 35,
  },
  buttonInactiveContainer: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  activeMark: {
    backgroundColor: '#1e88e5',
    width: 4,
  },
  activeIcon: {
    padding: 12,
    marginLeft: 8,
    marginTop: 4,
  },
  listContainer: {
    flex: 1,
    borderLeftWidth: 1,
    borderLeftColor: '#e5e5e5',
  },
  itemContainer: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomColor: '#ededed',
    borderBottomWidth: 1,
  },
  itemTopContainer: {
    flexDirection: 'row',
  },
  itemTypeContainer: {
    width: 50,
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTopTextContainer: {
    marginRight: 30,
    marginLeft: 4,
  },
  itemName: {
    color: '#000',
    fontWeight: '500',
    fontSize: 18,
  },
  itemDate: {
    color: '#787878',
    fontSize: 12,
    marginTop: 8,
  },
  itemDetail: {
    color: '#787878',
    marginTop: 12,
    fontSize: 15,
  },
});
