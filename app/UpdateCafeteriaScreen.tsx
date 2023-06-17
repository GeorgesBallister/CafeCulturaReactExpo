import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View, KeyboardAvoidingView  } from 'react-native';

const UpdateCafeteriaScreen: React.FC = () => {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [local, setLocal] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [avaliacao, setAvaliacao] = useState('');
  const [fotoPerfil, setFotoPerfil] = useState('');
  const [fotoRecomend, setFotoRecomend] = useState('');
  const [fotoCardapio, setFotoCardapio] = useState('');
  const [horarioFunc, setHorarioFunc] = useState('');
  const [nomeLink, setNomeLink] = useState('');

  const handleSubmit = async () => {
    const formData = {
      nome,
      local,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      avaliacao: parseFloat(avaliacao),
      fotoPerfil,
      fotoRecomend,
      fotoCardapio,
      horarioFunc,
      nomeLink,
    };

    try {
      const response = await fetch(`http://127.0.0.1:3000/Cafeteria/update/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Handle the response as needed
    } catch (error) {
      console.log('Error updating cafeteria:', error);
    }
  };

  return (
    <KeyboardAvoidingView  style={styles.container} behavior="padding">
      <TextInput
        style={styles.input}
        placeholder="ID"
        value={id}
        onChangeText={setId}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Local"
        value={local}
        onChangeText={setLocal}
      />
      <TextInput
        style={styles.input}
        placeholder="Latitude"
        value={latitude}
        onChangeText={setLatitude}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Longitude"
        value={longitude}
        onChangeText={setLongitude}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Avaliação"
        value={avaliacao}
        onChangeText={setAvaliacao}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Foto Perfil"
        value={fotoPerfil}
        onChangeText={setFotoPerfil}
      />
      <TextInput
        style={styles.input}
        placeholder="Foto Recomend"
        value={fotoRecomend}
        onChangeText={setFotoRecomend}
      />
      <TextInput
        style={styles.input}
        placeholder="Foto Cardápio"
        value={fotoCardapio}
        onChangeText={setFotoCardapio}
      />
      <TextInput
        style={styles.input}
        placeholder="Horário de Funcionamento"
        value={horarioFunc}
        onChangeText={setHorarioFunc}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome do Link"
        value={nomeLink}
        onChangeText={setNomeLink}
      />
      <Button title="Submit"  color="#846046" onPress={handleSubmit} />
    </KeyboardAvoidingView >
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#D4CDCB',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#846046',
    backgroundColor:'white',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 12,
    paddingHorizontal: 8,
  },

});

export default UpdateCafeteriaScreen;
