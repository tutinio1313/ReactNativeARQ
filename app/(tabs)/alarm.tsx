import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View } from 'react-native';
import  MapView, {Marker} from 'react-native-maps'; 

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


export default function TabThreeScreen() {
    const markers : Array<object> = [ { title : "Alarma #1", description : "Barrio Roca", latitude : -31.419211, longitude : -62.096819, isActive : true},
                                    {title : "Alarma #2", description : "Barrio Procrear", latitude : -31.450262, longitude: -62.074327, isActive : false},
                                    {title : "Alarma #3", description : "Barrio UTN", latitude : -31.423276, longitude : -62.105988, isActive : false}]; 


    return(
        <ParallaxScrollView
        headerBackgroundColor={{ light: '#D0D0D0', dark: '#3f0000' }}
        headerImage={<Ionicons size={310} name="megaphone-outline" style={styles.headerImage} />}>
        <ThemedView style = {styles.titleContainer}>
            <ThemedText type = "title" >Alarm</ThemedText>
        </ThemedView>
        
        <ThemedView style = {styles.defaultContainer}>
            <MapView
             initialRegion={{
                    latitude: -31.419640,
                    longitude: -62.095234,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                style = {styles.mapContainer}
            >
                {markers.map(marker => {
                    return(
                        <Marker 
                        key = {marker.key}
                        title = {marker.title}
                        description = {marker.description}
                        coordinate ={{latitude : marker.latitude, longitude : marker.longitude}}
                        image = {marker.isActive ? require('@/assets/images/alarm.png') : require('@/assets/images/alarmInactive.png')}
                        userInterfaceStyle = "dark"
                        showsUserPosition = {true}
                        />
                    )
                })}                    
            </MapView>
        </ThemedView>

        </ParallaxScrollView>
    )    
}

const styles = StyleSheet.create({
    headerImage: {
      color: '#943333',
      transform : 'rotate(-25deg)',
      bottom: -90,
      left: -35,
      position: 'absolute',
    },
    titleContainer: {
      flexDirection: 'row',
      gap: 8,
    },
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
  