import React from 'react';
import { StyleSheet, View } from 'react-native';
import LogoComponent from './Logo';
import SearchComponent from './Pesquisa';
import HorizontalButtonGroup from './Categorias';

export default function LogoSearch() {
  return (
    <View style={styles.container}>
      <LogoComponent />
      <SearchComponent />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 150,
  },
});
