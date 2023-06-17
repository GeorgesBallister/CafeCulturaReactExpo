import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Platform, Dimensions } from 'react-native';

interface Location {
  latitude: number;
  longitude: number;
}

interface CafeteriaItem {
  id: string;
  nome: string;
  latitude: number;
  longitude: number;
}

const CafeteriaScreen = () => {
  const [cafeteriaData, setCafeteriaData] = useState<CafeteriaItem[]>([]);
  const [userLocation, setUserLocation] = useState<Location | null>(null);

  useEffect(() => {
    fetchCafeteriaData();
    getUserLocation();
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

  const getUserLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        error => {
          console.log('Error getting user location:', error);
        }
      );
    } else {
      console.log('Geolocation is not supported');
    }
  };

  const calculateDistance = (latitude: number, longitude: number) => {
    if (!userLocation || !userLocation.latitude || !userLocation.longitude) {
      return 'Location not available';
    }

    const lat1 = userLocation.latitude;
    const lon1 = userLocation.longitude;
    const lat2 = latitude;
    const lon2 = longitude;

    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km

    return `${distance.toFixed(2)} km`;
  };

  const deg2rad = (deg: number) => {
    return deg * (Math.PI / 180);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      {Array.isArray(cafeteriaData) && cafeteriaData.map((item) => (
        <View key={item.id} style={styles.itemContainer}>
          <Text style={[styles.name, styles.text]}>{item.nome}</Text>
          <Text style={[styles.distance, styles.text]}>
            Distance: {calculateDistance(item.latitude, item.longitude)}
          </Text>
        </View>
      ))}
    </ScrollView>
  );

};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  container: {
    flex: 1,
    padding: 16,
  },

  itemContainer: {
    marginBottom: 16,
  },
  text: {
    fontSize: Platform.select({
      ios: Dimensions.get('window').width * 0.04,
      android: Dimensions.get('window').width * 0.04,
      default: Dimensions.get('window').width * 0.04,
    }),
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#846046',
  },
  distance: {
    fontSize: 14,
  },
});

export default CafeteriaScreen;