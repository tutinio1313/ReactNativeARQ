import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet} from 'react-native';
import React from 'react';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import CustomMapView from '@/components/CustomMapView';
import CollectionList from "@/components/CollectionList";

import bike from '@/assets/images/bike.png';
import bikeInactive from '@/assets/images/bikeInactive.png';


export default function TabThreeScreen() {
  const markers : object[] = [ { key : 1, title : "Bicicltero #1 - 5/10", description : "Bicicletero Sport", latitude : -31.421802, longitude : -62.095755, isActive : true},
    { key : 2,title : "Bicicltero #2 - No hay bicis disponibles", description : "Bicicletero UTN", latitude : -31.419808, longitude: -62.109088, isActive : false},
    { key : 3,title : "Bicicltero #3 - No hay bicis disponibles", description : "Bicicletero Barrio Parque", latitude : -31.424271, longitude : -62.068639, isActive : false}]; 

    return(
        <ParallaxScrollView
        headerBackgroundColor = {{ light: '#D0D0D0', dark: '#353636' }}
        headerImage = {<Ionicons size={320} name ="bicycle-outline" style ={styles.headerImage}/>}
        >
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Bicicletas</ThemedText>                
            </ThemedView>  

            <CustomMapView 
            markers = {markers}
            icon = {bike}
            alternateIcon = {bikeInactive}
            />      

            <CollectionList 
            markers = {markers}
            ButtonColor = "#353636"
            ContentDisplayed = "Bicicleteros"/>
        </ParallaxScrollView>
    )
}



const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
      },
    
    titleContainer: {
      flexDirection: 'row',
      gap: 8,
    },
  });
  