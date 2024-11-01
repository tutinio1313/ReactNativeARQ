import Ionicons from "@expo/vector-icons/Ionicons";
import { React } from "react";
import { StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import CustomMapView from "@/components/CustomMapView";
import CollectionList from "@/components/CollectionList";

import alarm from "@/assets/images/alarm.png";
import alarmInactive from "@/assets/images/alarmInactive.png";

export default function TabThreeScreen() {
  const markers: object[] = [
    {
      key: 1,
      title: "Alarma #1",
      description: "Barrio Roca",
      latitude: -31.419211,
      longitude: -62.096819,
      isActive: true
    },
    {
      key: 2,
      title: "Alarma #2",
      description: "Barrio Procrear",
      latitude: -31.450262,
      longitude: -62.074327,
      isActive: false
    },
    {
      key: 3,
      title: "Alarma #3",
      description: "Barrio UTN",
      latitude: -31.423276,
      longitude: -62.105988,
      isActive: false
    }
  ];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#3f0000" }}
      headerImage={
        <Ionicons
          size={310}
          name="megaphone-outline"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Alarmas</ThemedText>
      </ThemedView>

      <CustomMapView
        markers={markers}
        icon={alarm}
        alternateIcon={alarmInactive}
      />

      <CollectionList 
      markers = {markers}
      ButtonColor = "#3f0000"
      ContentDisplayed = "alarmas"/>

      
    </ParallaxScrollView>
  );
}



const styles = StyleSheet.create({
  headerImage: {
    color: "#943333",
    transform: "rotate(-25deg)",
    bottom: -90,
    left: -35,
    position: "absolute"
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8
  }
  ,container:{
    gap:4
    
  }
  ,alarmContainer : {
    backgroundColor : "#15130e"
    ,margin : "2% auto"
    ,width : "80vh"
}
});
