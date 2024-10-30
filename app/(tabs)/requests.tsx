import Ionicons from "@expo/vector-icons/Ionicons";
import { React } from "react";
import { StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function requests() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#14181e" }}
      headerImage={
        <Ionicons size={270} name="alert-circle" style={styles.headerImage} />
      }
    >

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#5b6d88",
    transform: "rotate(-25deg)",
    top: "auto",
    left: 35,
    position: "absolute"
  }
});
