import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { StyleSheet} from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import CustomMapView from '@/components/CustomMapView';
import { ThemedView } from '@/components/ThemedView';

export default function parking() {
  const pointers = [{latitude : -31.424855, longitude : -62.096176}, {latitude : -31.427623, longitude: -62.096866}, {latitude : -31.430573, longitude : -62.078347}, {latitude : -31.427881, longitude :-62.077800}]


    return (
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#D0D0D0', dark: '#3B1E54' }}
        headerImage={<Ionicons size={310} name="car" style={styles.headerImage} />}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Estacionamiento medido</ThemedText>
        </ThemedView>

        <CustomMapView
        pointers = {pointers}
        />
  
          
      </ParallaxScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    headerImage: {
      color: '#9B7EBD',
      bottom: -50,
      left: -35,
      position: 'absolute',
    },
    titleContainer: {
      flexDirection: 'row',
      gap: 8,
    },
  });
  