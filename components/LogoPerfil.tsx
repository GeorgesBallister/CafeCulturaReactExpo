import React from 'react';
import { TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const LogoPerfil = () => {
  const screenWidth = Dimensions.get('window').width;
  const logoSize = screenWidth * 0.25;

  function handleClick() {
    Link.resolveHref(''); // Navigates to the "Tab Three" screen
  }

  return (
    <TouchableOpacity onPress={handleClick} style={styles.logoContainer}>
      <Image source={require('../assets/images/logo.png')} style={styles.logo} resizeMode="stretch" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    marginTop:20,
    marginBottom:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 50,
    width: 185,
  },
});

export default LogoPerfil;