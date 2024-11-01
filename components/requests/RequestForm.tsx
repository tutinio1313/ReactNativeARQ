import React from "react";
import { StyleSheet, Button, TextInput, View         } from "react-native";
import { Select, SelectProvider } from '@mobile-reality/react-native-select-pro';   

import reasons from '@/data/reasons.json';
import {ThemedView} from '@/components/ThemedView.tsx';
import {ThemedText} from '@/components/ThemedText.tsx';

interface props {
    setRequest : () => boolean;
}

export default function RequestForm({setRequest} : props) {

    
    return (
        <View>
            <ThemedView>
                    <ThemedText style = {styles.subtitle}>Subject</ThemedText>
                    <SelectProvider>
                        <Select options = {reasons.reportReasons}  animation = {500}/>
                    </SelectProvider>                    

                    <ThemedText style = {styles.subtitle}>Explanation</ThemedText>
                    <TextInput/>                  
            </ThemedView>

            <Button title = "Submit" onClick = {() => setRequest(true)}/>            
        </View>
    );
};

const styles = StyleSheet.create({
      subtitle : {
        fontSize : 22,
        textDecoration : "bold",
        width : '80vh'
    }
});