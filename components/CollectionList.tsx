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
            ? "Hide " + ContentDisplayed
            : "Show " + ContentDisplayed
        }
        color = {ButtonColor}
        onPress={() => setCollapsibleVisible(!isCollapsibleVisible)}
      />

      {isCollapsibleVisible ?
    <ThemedView style={styles.container}>
        {markers.map((marker) => {
          return (
            <ThemedView style={styles.alarmContainer} key={marker.key}>
              <ThemedText> {marker.description}</ThemedText>
              <Button
                title={marker.isActive ? "Go to maps" : "Unavailable"}
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
  alarmContainer: {
    marginTop: 10,
    width: "80vh"
  }
});
