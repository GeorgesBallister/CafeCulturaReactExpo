import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SearchComponent = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handlePress = () => {
    setExpanded(!isExpanded);
  };

  const handleChangeText = (text: string) => {
    setSearchText(text);
    setExpanded(!isExpanded);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.searchBar, isExpanded && styles.searchBarExpanded]}
        activeOpacity={1}
        onPress={handlePress}
      >
        <TextInput
          style={styles.input}
          placeholder="Pesquisar..."
          value={searchText}
          onChangeText={handleChangeText}
         onBlur={handlePress}
        />
      </TouchableOpacity>
      {isExpanded && (
        <View style={styles.textArea}>
          {/* Add your text area component here */}
          {/* For example: <YourTextAreaComponent /> */}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    paddingHorizontal: 20,
    position: 'absolute',
    top: 85,
    left: 0,
    right: 0,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
  },
  searchBarExpanded: {
    borderColor: '#846046', // Replace 'lightbrown' with your desired light brown color
  },
  input: {
    fontSize: 16,
  },
  textArea: {
    backgroundColor: '#FFFFFF', // Replace 'lightgray' with your desired background color
    marginTop: 10,
    padding: 8,
    borderRadius: 8,
  },
});

export default SearchComponent;
