import { View, TextInput, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

export const SearchHeader = () => {
  return (
    <View style={styles.search}>
      <EvilIcons
        name="search"
        size={24}
        color="white"
        style={styles.search_icon}
      />
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="#fff"
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
    padding: 8,
  },
  search_icon: {
    position: "absolute",
    left: 20,
    bottom: 15,
    zIndex: 2,
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
