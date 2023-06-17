import React from 'react';
import { TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const LogoComponent = () => {
  const screenWidth = Dimensions.get('window').width;
  const logoSize = screenWidth * 0.25;

  function handleClick() {
    Link.resolveHref(''); // Navigates to the "Tab Three" screen
}

  return (
    <TouchableOpacity style={styles.container}>
      <Link href="home" onPress={handleClick}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} resizeMode="stretch" />
      </Link>
    </TouchableOpacity>
    
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    height:50,
    width:185,

  },
});

export default LogoComponent;
