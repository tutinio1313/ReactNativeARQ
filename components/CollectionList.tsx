import React, { useState } from "react";
import { StyleSheet, Button, Linking } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

interface props {
  markers: object[];
  ButtonColor: string;
  ContentDisplayed: string;
}

export default function CollectionList({
  markers,
  ButtonColor,
  ContentDisplayed
}: props) {
  const [isCollapsibleVisible, setCollapsibleVisible] =
    useState<boolean>(false);

  return (
    <ThemedView>
      <Button
        title={
          isCollapsibleVisible
            ? "Ocultar " + ContentDisplayed
            : "Mostrar " + ContentDisplayed
        }
        color = {ButtonColor}
        onPress={() => setCollapsibleVisible(!isCollapsibleVisible)}
      />

      {isCollapsibleVisible ?
    <ThemedView style={styles.container}>
        {markers.map((marker) => {
          return (
            <ThemedView style={styles.itemContainer} key={marker.key}>
              <ThemedText> {marker.description}</ThemedText>
              <Button
                title={marker.isActive ? "Abrir en Maps" : "No disponible"}
                color={ButtonColor}
                disabled={marker.isActive ? false : true}
                onPress={() => ClickButton(marker.latitude, marker.longitude)}
              />
            </ThemedView>
          );
        })}
      </ThemedView>
      :
      null
      }
    </ThemedView>
  );
}

function ClickButton(latitude, longitude) {
  const url = `geo://0,0?q=${latitude + "," + longitude}`;
  Linking.openURL(url);
}

const styles = StyleSheet.create({
  container: {
    marginTop : 20,
    gap: 4
  },
  itemContainer: {
    marginTop: 10,
    width: "80vh"
  }
});
