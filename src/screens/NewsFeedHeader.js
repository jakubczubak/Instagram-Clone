import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export const NewsFeedHeader = () => {
  return (
    <View style={styles.header_container}>
      <View style={styles.header_container_logo_container}>
        <LottieView
          style={styles.lottie_size}
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
          style={styles.icon_padding}
        />
        <AntDesign
          name="hearto"
          size={24}
          color="white"
          style={styles.icon_padding}
        />
        <Feather name="send" size={24} color="white" style={styles.icon_padding} />
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
  lottie_size: {
    width: 80, 
    height: 80
  },
  icon_padding: {
    padding: 16
  }
});
