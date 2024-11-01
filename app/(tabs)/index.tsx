import Ionicons from '@expo/vector-icons/Ionicons';

import { StyleSheet} from 'react-native';
import React from 'react';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#5d220e' }}
      headerImage= {<Ionicons size={310} name="home" style={styles.reactLogo}/>}
      >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Sistema Autogestión</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    color : "#9a3816"
  },
});
