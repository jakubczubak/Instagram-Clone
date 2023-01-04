import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export const NewsFeedHeader = () => {
  return (
    <View style={styles.header_container}>
      <View style={styles.header_container_logo_container}>
        <LottieView
          style={{ width: 80, height: 80 }}
          source={require("../../assets/instagram.json")}
          autoPlay
          loop
        />
        <Text style={styles.header_container_logo_container_text}>
          Instagram
        </Text>
      </View>
      <View style={styles.header_container_icon_container}>
        <Feather
          name="plus-square"
          size={24}
          color="white"
          style={{ padding: 16 }}
        />
        <AntDesign
          name="hearto"
          size={24}
          color="white"
          style={{ padding: 16 }}
        />
        <Feather name="send" size={24} color="white" style={{ padding: 16 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header_container: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "row",
    paddingTop: 20,
  },
  header_container_logo_container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  header_container_logo_container_text: {
    color: "#fff",
    fontSize: 20,
  },
  header_container_icon_container: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
