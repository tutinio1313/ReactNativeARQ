import React from "react";
import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import MapView, { Marker, Polygon } from "react-native-maps";

interface props {
  markers?: object[];
  pointers?: object[];
  icon: string;
  alternateIcon: string;
}

export default function CustomMapView({
  markers,
  pointers,
  icon,
  alternateIcon
}: props) {
  return (
    <ThemedView style={styles.defaultContainer}>
      <MapView
        provider={"google"}
        googleMapId={"dd37f6d24aa03efa"}
        initialRegion={{
          latitude: -31.41964,
          longitude: -62.095234,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        style={styles.mapContainer}
        showsUserPosition={true}
      >
        {markers !== null && markers !== undefined
          ? markers?.map((marker) => {
              return (
                <Marker
                  key={marker.key}
                  title={marker.title}
                  description={
                    marker.description +
                    " - " +
                    (marker.isActive ? "Activada" : "Desactivada")
                  }
                  coordinate={{
                    latitude: marker.latitude,
                    longitude: marker.longitude
                  }}
                  image={marker.isActive ? icon : alternateIcon}
                  userInterfaceStyle="dark"
                />
              );
            })
          : null}

        {pointers !== null && pointers !== undefined ? (
          <Polygon 
          coordinates={pointers}
          strokeColor = "#c16666"
          fillColor = "#9600006b" />
        ) : null}
      </MapView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  defaultContainer: {
    height: 400,
    width: 350,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    width: "fit-content",
    height: "fit-content"
  }
});
