import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import LogoPerfil from '../../components/LogoPerfil';
import CafeteriaScreen from '../../components/CafeteriaScreen';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <LogoPerfil/>
      <CafeteriaScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex:3,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
