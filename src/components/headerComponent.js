/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const HeaderComponent = (props) => {
    return (
        <View>
            <View style={styles.headerContainer}>
                <View style={styles.inputContainer}>
                    <FontAwesomeIcon icon={faSearch} />
                    <Text>Bạn tìm gì hôm nay</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
    },
    inputContainer: {
        backgroundColor: '#fff',
    },
});

