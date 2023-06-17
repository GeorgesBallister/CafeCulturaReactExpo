import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface CardDetailsScreenProps {
  route: {
    params: {
      nome: string;
      fotoPerfil: string;
    };
  };
}

const CardDetailsScreen: React.FC<CardDetailsScreenProps> = ({ route }) => {
  const { nome, fotoPerfil } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{nome}</Text>
      <Image source={{ uri: fotoPerfil }} style={styles.image}/>
      {/* Other details and components */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
});

export default CardDetailsScreen;
