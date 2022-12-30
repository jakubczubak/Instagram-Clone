import { View, Text, StyleSheet } from "react-native";

export const Movies = () => {
  return (
    <View style={styles.container}>
      <Text>Media screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
