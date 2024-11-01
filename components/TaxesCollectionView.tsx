import React, {useState} from "react";
import { Button, StyleSheet } from "react-native";
import taxes from "@/data/taxes.json";

import {ThemedView} from '@/components/ThemedView';
import {ThemedText} from '@/components/ThemedText';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function TaxesCollectionView(){
    const [isVisible, setVisibility] = useState<boolean>(false);

    return (
        <ThemedView>
            <Button
                title = {isVisible ? "Mostrar historial" : "Ocultar historial"}
                onPress = {() => setVisibility(!isVisible)}
            />

            
            <ThemedView
                style = {styles.container}
            >
                { isVisible ?

                    taxes.months.map((tax) => 
                        {
                            return(
                                <ThemedView 
                                    key = {tax.key}
                                    style = {styles.itemContainer}
                                >
                                    <ThemedText>{tax.name}</ThemedText>
                                    <Ionicons 
                                        name={(tax.taxPaid ? "checkmark-circle":"alert-circle")}
                                        style = {tax.taxPaid ? styles.paidTax : styles.unpaidTax}
                                        size = {24}                                        
                                    />

                                    {
                                    tax.taxPaid ? null : <Button 
                                                            title = "Pagar"
                                                            color = "#f52323"
                                                            /> 
                                    }
                                </ThemedView>
                            )   
                        }
                    )
                
                    : 
                    null
                }
            </ThemedView>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
      marginTop : 20,
      gap: 4
    },
    itemContainer: {
      marginTop: 10,
      display : "flex"
      ,flexDirection : "row"
      ,alignContent : 'center'
      ,width: "80vh"
    }
    ,unpaidTax : {
        color : "#cc0400"
    }
    ,paidTax : {
        color : "#00cc04"
    }
  });
