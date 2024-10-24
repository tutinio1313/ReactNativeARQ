import React from "react";
import { StyleSheet} from 'react-native';
import { ThemedView } from "@/components/ThemedView";
import  MapView, {Marker} from 'react-native-maps'; 

interface props {
    markers : object[], 
    icon : string,
    alternateIcon : string
}

export default function CustomMapView({markers, icon, alternateIcon} : props) {
    return (
    <ThemedView style = {styles.defaultContainer}>
            <MapView
             initialRegion={{
                    latitude: -31.419640,
                    longitude: -62.095234,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                style = {styles.mapContainer}
                mapType = "standard"
                userInterfaceStyle = "dark"
                showsUserPosition = {true} 

            >
                {markers.map(marker => {
                    return(
                        <Marker 
                        key = {marker.key}
                        title = {marker.title}
                        description = {marker.description + " - " + (marker.isActive ? "Activada" : "Desactivada")}
                        coordinate ={{latitude : marker.latitude, longitude : marker.longitude}}
                        image = {marker.isActive ? icon : alternateIcon}
                        userInterfaceStyle = "dark"
                        />
                    )
                })}                    
            </MapView>
        </ThemedView>    );
};

const styles = StyleSheet.create({
    defaultContainer : {
        height: 400,
        width: 350,
        justifyContent: 'flex-end',
        alignItems: 'center',
},
mapContainer : {
    ...StyleSheet.absoluteFillObject,
    width: "fit-content"
    ,height : "fit-content"
}
});