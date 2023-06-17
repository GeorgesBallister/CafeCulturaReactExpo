import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, Alert  } from "react-native";

import { Link } from "expo-router";

function handleClick() {
  Link.resolveHref(""); // Navigates to the "Tab Three" screen
}

interface BlackCardProps {
  imageSource: string;
  name: string;
  subName: string;
  rating: string;
}
function alerting(){
  Alert.alert("Perdão!", "As telas de perfil não foram configuradas, porém você pode tentar as funcionalidades de adicionar e editar cafeterias!");
  console.log("Perdão! As telas de perfil não foram configuradas, porém você pode tentar as funcionalidades de adicionar e editar cafeterias! ")
}

const BlackCard: React.FC<BlackCardProps> = ({
  imageSource,
  name,
  subName,
  rating,
}) => {
  const nameFontSize = Math.max(20 - name.length * 0.5, 14); // Calculate the dynamic font size based on text length

  return (
    

        <View style={styles.container}>
          <TouchableOpacity style={styles.link} onPress={() => alerting()} >
          <Image
            source={{ uri: imageSource }}
            style={styles.image}
            resizeMode="cover"
          />
         </TouchableOpacity>
          <Text style={[styles.name, { fontSize: nameFontSize }]}>{name}</Text>
          <Text style={styles.subName}>{subName}</Text>

          <View style={styles.ratingContainer}>
            <View style={styles.ratingCircle}>
              <Text style={styles.ratingText}>{rating}</Text>
            </View>
          </View>
        </View>

   
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    backgroundColor: "#121212",
    borderRadius: 25,
    alignItems: "center",
    paddingVertical: 16,
    aspectRatio: 0.75,
    maxHeight: 230,
    marginBottom: 10,
  },
  image: {
    width: "85%",
    height: "55%",
    borderRadius: 25,
    marginBottom: 16,
    marginLeft:12,
  },
  link: {
   
    width: "100%",
    height: "100%",
    borderRadius: 25,
    
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 8,
    position: "absolute",
    bottom: 70,
    left: 6,
  },
  subName: {
    fontSize: 12,
    color: "white",
    marginBottom: 8,
    position: "absolute",
    bottom: 50,
    left: 6,
  },
  ratingContainer: {
    backgroundColor: "#888888",
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 12,
    paddingVertical: 6,
    position: "absolute",
    bottom: 5,
    left: 6,
  },
  ratingCircle: {
    width: 24,
    height: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  ratingText: {
    fontSize: 14,
    color: "white",
  },
});

export default BlackCard;
