import React from "react";
import { StyleSheet, Linking} from "react-native";

import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";


interface props {
    name : string;
    phoneNumber : number;
    email : string;
}

export default function HelpContainer({name, phoneNumber, email} : props){
    return (
        <ThemedView
            style = {styles.Container}
        >
            <ThemedText style = {styles.subtitle}>{name}</ThemedText>
            
            {
                (phoneNumber !== null && phoneNumber !== undefined) ?
                <ThemedView style = {styles.Item}>
                    <ThemedText 
                        onPress = {() => Linking.openURL("tel:" + phoneNumber)}
                    >Phone = {phoneNumber} </ThemedText> 
                </ThemedView>
                : null
            }

{
                (email !== null && email !== undefined) ?
                <ThemedView style = {styles.Item}>
                    <ThemedText
                        onPress = {() => Linking.openURL("mailto:" + email)}
                    >Email = {email} </ThemedText> 
                </ThemedView>
                : null
            }

        </ThemedView>
    );
};

const styles = StyleSheet.create({
    Container: {
        top : 20
        ,bottom : 40
        ,flex : 2
        ,flexDirection : "column"
        , gap : 2
    },
    Item : {
        flexDirection : "row"
    }
    ,Button : {
        height : "fit-content"
    }
    ,subtitle : {
        fontSize : 20
        ,fontWeight : 'bold'
    }

});

