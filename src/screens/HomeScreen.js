/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import {HeaderComponent} from '../components/headerComponent';
import {BodyComponent} from '../components/bodyComponent';
const HomeScreen = () => {
    return (
      <View>
        <ScrollView>
          <StatusBar barStyle="light-content" />
          <HeaderComponent />
          <BodyComponent />
        </ScrollView>
      </View>
    );
};

export default HomeScreen;
