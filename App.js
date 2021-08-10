import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {HeaderComponent} from './src/components/headerComponent';

export default class App extends Component {
  render() {
    return (
      <View>
        <HeaderComponent />
      </View>
    );
  }
}
