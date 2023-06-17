import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import React from 'react';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import CafeComponent from '../../components/CafeComponent';
import LogoPerfil from '../../components/LogoPerfil';

export default function TabThreeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <LogoPerfil />
        </View>
        <CafeComponent />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  container: {
    flex: 1,
  },
  logoContainer: {
    marginBottom: 16,
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
  },
});
  