import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Karoline Rayssa da Silva Gomes</Text>
      <Text>Fernanda Lima Ribeiro da Silva</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800080',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
