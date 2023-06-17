import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import BlackCard from './SmallCard';

const data = [
  {
    id: '1',
    imageSource: 'https://iili.io/HrUnUss.png',
    name: 'Coffee 1',
    subName: 'Location 1',
    rating: '4.5',
  },
  {
    id: '2',
    imageSource: 'https://iili.io/HrUnUss.png',
    name: 'Coffee 2',
    subName: 'Location 2',
    rating: '4.0',
  },
  // Add more data objects for additional cards
];

interface GridItem {
  id: string;
  imageSource: string;
  name: string;
  subName: string;
  rating: string;
}

const Grid: React.FC = () => {
  const renderCard = ({ item }: { item: GridItem }) => (
    <View style={styles.cardContainer}>
      <BlackCard
        imageSource={item.imageSource}
        name={item.name}
        subName={item.subName}
        rating={item.rating}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.gridContentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gridContentContainer: {
    paddingBottom: 16,
  },
  cardContainer: {
    flex: 1 / 3,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
});

export default Grid;
