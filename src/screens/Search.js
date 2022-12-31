import React from "react";
import { StyleSheet, Text, View, TextInput, StatusBar } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

export const Search = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: "black",
          alignItems: "flex-end",
          justifyContent: "center",
          flexDirection: "row",
          padding: 8,
        }}
      >
        <EvilIcons
          name="search"
          size={24}
          color="white"
          style={{ position: "absolute", left: 20, bottom: 15, zIndex: 2 }}
        />
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="#fff"
        ></TextInput>
      </View>
      <View style={{ flex: 6, backgroundColor: "green" }}></View>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  input: {
    backgroundColor: "#4d4e53",
    paddingVertical: 8,
    paddingHorizontal: 35,
    width: "95%",
    borderRadius: 4,
    color: "#fff",
  },
});
