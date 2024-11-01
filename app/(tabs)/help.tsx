import Ionicons from "@expo/vector-icons/Ionicons";
import { React } from "react";
import { StyleSheet } from "react-native";
import contacts from "@/data/helpContacts.json";


import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import HelpContainer from "@/components/HelpContainer";

export default function help() {


    return(
        <ParallaxScrollView
        headerBackgroundColor={{ light: '#D0D0D0', dark: '#8e2525' }}
            headerImage = {
                <Ionicons 
                    size = {270}
                    name = "help-circle"
                    style = {styles.headerImage}
                />
            }
        >

            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Telefonos de Ayuda</ThemedText>
            </ThemedView>


            <ThemedView
                style = {styles.Container}
            >
                {
                    contacts.emergencyContacts.map(contact => {
                        return(
                            <HelpContainer
                                key = {contact.key}
                                phoneNumber = {contact.phoneNumber}
                                name = {contact.name}
                                email = {contact.email}
                            />
                        );
                    })
                }
            </ThemedView>
        
        </ParallaxScrollView>    
    );
}

const styles = StyleSheet.create({
    headerImage: {
      color: "#5d1b1b",
      transform: "rotate(-25deg)",
      top : "auto",
      left: 35,
      position: "absolute"
    },
    Container : {
        gap : 20
    }
});