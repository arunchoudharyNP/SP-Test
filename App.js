import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import RootNavigation from "./Navigation/RootNavigation";

export default function App() {
  return <RootNavigation></RootNavigation>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
