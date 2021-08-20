/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const HeaderComponent = (props) => {
    return (
        <View>
            <View style={styles.headerContainer}>
                <View style={styles.inputContainer}>
                    <FontAwesomeIcon icon={faSearch} size={24} color="#969696"/>
                    <Text style={styles.inputText}>Bạn tìm gì hôm nay</Text>
                </View>
                <View style={styles.cartContainer}>
                    <FontAwesomeIcon icon={faShoppingCart} size={24} color="#fff"/>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        paddingTop: 30,
        paddingBottom: 4,
        backgroundColor: '#1e88e5',
    },
    inputContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        flex: 1,
        marginLeft: 10,
        alignItems: 'center',
        marginBottom: 4,
    },
    inputText: {
        color: '#969696',
        fontSize: 14,
        marginLeft: 8,
        fontWeight: '500',
    },
    cartContainer: {
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

