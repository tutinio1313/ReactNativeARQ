import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet} from 'react-native';


import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabThreeScreen() {
    return(
        <ParallaxScrollView
        headerBackgroundColor = {{ light: '#D0D0D0', dark: '#353636' }}
        headerImage = {<Ionicons size={320} name ="bicycle-outline" style ={styles.headerImage}/>}
        >
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Bicycles</ThemedText>                
            </ThemedView>        
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
  