  import { React, useState } from "react";
import { StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import RequestForm from "@/components/requests/RequestForm";


export default function requests() {
  const [isReportSubmitted, setIsReportSubmitted] = useState<boolean>(false)
  
  return (
    <View
    style = {styles.container}
    >
      <ThemedText type = "title">Quejas</ThemedText>

      {
        !isReportSubmitted ?
        
        <RequestForm setRequest = {setIsReportSubmitted}/> :

        <ThemedView>
            <ThemedText>The ticket has been created!</ThemedText>
        </ThemedView>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
