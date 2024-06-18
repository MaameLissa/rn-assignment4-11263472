import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./Components/LoginScreen";
import Homescreen from "./Components/Homescreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LoginScreen/> */}
      {/* <Homescreen /> */}
      <Text></Text>
      <LoginScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },
});
