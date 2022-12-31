import { StatusBar } from "expo-status-bar";
import { Text, View, Image, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export const PhotoDetails = ({ route, navigation }) => {
  const { url, title, id } = route.params;

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: "black",
          flexDirection: "row",
          paddingTop: 20,
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "black",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <LottieView
            style={{ width: 80, height: 80 }}
            source={require("../../assets/instagram.json")}
            autoPlay
            loop
          />
          <Text style={{ color: "#fff", fontSize: 20 }}>Instagram</Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "black",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
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
          <Feather
            name="send"
            size={24}
            color="white"
            style={{ padding: 16 }}
          />
        </View>
      </View>
      <View style={{ flex: 5, backgroundColor: "black" }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "black",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "flex-start",
            paddingTop: 20,
          }}
        >
          <FontAwesome
            name="user-circle-o"
            size={30}
            color="white"
            style={{ padding: 12 }}
          />
          <Text style={{ color: "white", width: "60%" }}>{title}</Text>
          <Entypo
            name="dots-three-horizontal"
            size={24}
            color="white"
            style={{ position: "absolute", right: 10 }}
          />
        </View>
        <View style={{ flex: 7, backgroundColor: "pink" }}>
          <Image
            style={{ width: "100%", height: 400 }}
            source={{
              uri: url,
            }}
          ></Image>
        </View>
        <View style={{ flex: 2, backgroundColor: "red" }}>
          <View
            style={{
              flex: 1,
              backgroundColor: "black",
              flexDirection: "row",
            }}
          >
            <AntDesign
              name="hearto"
              size={24}
              color="white"
              style={{ padding: 16 }}
            />
            <Feather
              name="send"
              size={24}
              color="white"
              style={{ padding: 16 }}
            />
            <Feather
              name="message-circle"
              size={24}
              color="white"
              style={{ padding: 16 }}
            />
            <FontAwesome
              name="bookmark-o"
              size={24}
              color="white"
              style={{ padding: 16, position: "absolute", right: 10 }}
            />
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "black",
              flexDirection: "column",
            }}
          >
            <Text style={{ color: "white", paddingLeft: 12 }}>ID: {id}</Text>

            <Text style={{ color: "white", padding: 12 }}>
              Lorem ipsum dolor sit amet.
            </Text>
          </View>
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
