import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Products from './Products';
import Bottom from './components/Bottom';
import Topo from './components/Topo';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Topo />
      <Products />
      <Bottom />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    /*alignItems: 'center',
    justifyContent: 'center',*/
  },
});
