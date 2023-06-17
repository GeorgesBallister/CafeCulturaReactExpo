import { StyleSheet, ScrollView, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import LogoComponent from '../../components/Logo';
import SearchComponent from '../../components/Pesquisa';
import LogoSearch from '../../components/LogoSearch';
import HorizontalButtonGroup from '../../components/Categorias';
import BlackCard from '../../components/SmallCard';
import { Link } from 'expo-router';
const windowWidth = Dimensions.get('window').width;

interface CafeteriaItem {
  id: string;
  nome: string;
  fotoRecomend: string;
  latitude: number;
  longitude: number;
  avaliacao: number;
  local: string;
}


export default function TabOneScreen() {
  const [cafeteriaData, setCafeteriaData] = useState<CafeteriaItem[]>([]);

  useEffect(() => {
    fetchCafeteriaData();
  }, []);

  const fetchCafeteriaData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:3000/cafeteria');
      const data = await response.json();
      setCafeteriaData(data.cafeterias);
    } catch (error) {
      console.log('Error fetching cafeteria data:', error);
    }
  };
  return (
    <View style={styles.container}>
      
      <LogoSearch/>
      <HorizontalButtonGroup/>
      <ScrollView horizontal contentContainerStyle={styles.scrollContainer} showsHorizontalScrollIndicator={false}> 
      <View style={styles.cardContainer}>
        
      {cafeteriaData.map((cafeteria, index) => (
            <BlackCard
              key={index}
              imageSource={cafeteria.fotoRecomend}
              name={cafeteria.nome}
              subName={cafeteria.local}
              rating="4.5"
            />
            ))}
       
      </View>
      </ScrollView>
      <ScrollView horizontal contentContainerStyle={styles.scrollContainer} showsHorizontalScrollIndicator={false}> 
      <View style={styles.cardContainer}>
        
      {cafeteriaData.map((cafeteria, index) => (
            <BlackCard
              key={index}
              imageSource={cafeteria.fotoRecomend}
              name={cafeteria.nome}
              subName={cafeteria.local}
              rating="4.5"
            />
            ))}
       
      </View>
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  scrollContainer:{
    flex:1,
    width:'200%',
    
  },
  cardContainer:{
    
    marginLeft:20,
    width:windowWidth,
    flexDirection:'row',
    flex:1,
  },
  linkContaner:{
    flex:1,
  }
});
