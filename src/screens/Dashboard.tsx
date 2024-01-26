import React from "react";
import { StyleSheet, Text, View } from "react-native";


export function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    text: {
        color: "#fff",
    }
    });