import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { StyleSheet} from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import TaxesCollectionView from '@/components/TaxesCollectionView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#1f331f' }}
      headerImage={<Ionicons size={310} name="cash-outline" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Impuestos</ThemedText>
      </ThemedView>

      <TaxesCollectionView/>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#4c7c4c',
    transform : 'rotate(-25deg)',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
