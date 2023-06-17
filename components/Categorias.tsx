import React from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';



const HorizontalButtonGroup = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Link href="AddCafeteriaScreen">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Adicionar Cafeterias</Text>
          </View>
        </Link>
        <Link href="UpdateCafeteriaScreen">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Editar Cafeterias</Text>
          </View>
        </Link>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    maxHeight: 60,
    position: 'absolute',
    top: 150,
  },
  contbtn: {
    position: 'absolute',
    top: 150,
  },
  button: {
    marginHorizontal: 15,
    backgroundColor: '#846046',
    borderRadius: 8,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default HorizontalButtonGroup;
