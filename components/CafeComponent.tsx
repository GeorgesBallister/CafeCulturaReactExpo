import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, Dimensions, ImageSourcePropType, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface Cafe {
  id: string;
  fotoRecomend: string;
  nome: string;
  local: string;
  avaliacao: number;
}

interface CafeComponentProps {
  imageSize: { width: number; height: number };
}

const CafeComponent = () => {
  const [cafeteriaData, setCafeteriaData] = useState<Cafe[]>([]);

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

  const calculateImageSize = (): { width: number; height: number } => {
    const containerWidth = Dimensions.get('window').width;
    const scrollheight = Dimensions.get('window').height * 0.8;

    const imageWidth = containerWidth * 0.35;
    const imageHeight = (249 / 320) * imageWidth;

    return { width: imageWidth, height: imageHeight };
  };

  return (
    <>
      {cafeteriaData.map((item) => (
        <LinearGradient colors={['#282C34', '#282C34']} style={styles.gradient} key={item.id}>
          <View style={[styles.imageContainer]}>
            <Image source={{ uri: item.fotoRecomend }} style={styles.image} resizeMode="contain" />
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>{item.nome}</Text>
            <Text style={styles.location}>{item.local}</Text>
            <View style={styles.ratingContainer}>
              <View style={styles.ratingCircle}>
                <Text style={styles.ratingText}>{item.avaliacao}</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 8,
    borderRadius: 23,
    overflow: 'hidden',
    height: '4%'
  },
  container: {},
  imageContainer: {
    flex: 0.35,
    aspectRatio: 320 / 249,
    marginRight: 8,
    marginLeft: 8,
    marginTop: 10,
    borderRadius: 23,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 23,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 16,
    color: '#ffffff',
  },
  location: {
    fontSize: 14,
    marginBottom: 8,
    color: '#83868D',
  },
  ratingContainer: {
    backgroundColor: '#888888',
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 12,
    paddingVertical: 6,
    position: 'absolute',
    top: 18,
    right: 8,
    padding: 4,
  },
  ratingCircle: {
    width: 24,
    height: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingText: {
    fontSize: 14,
    color: 'white',
  },
});

export default CafeComponent;