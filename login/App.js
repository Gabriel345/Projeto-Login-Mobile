import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './src/style/style';
import Login from './src/components/Login';


export default function App() {
  return (
    <View style={styles.container}>
      <Login/>
      <StatusBar style="auto" />
    </View>
  );
}


