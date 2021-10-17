/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Route from './src/routes/index';

console.disableYellowBox = true;

export default function App() {
  return (
    <SafeAreaProvider>
      <Route />
    </SafeAreaProvider>
  );
}
