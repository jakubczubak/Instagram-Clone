import { Text, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export const NewsFeedFooter = () => {
  return (
    <View style={styles.news_feed_footer}>
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
        <Feather name="send" size={24} color="white" style={{ padding: 16 }} />
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
      <View style={styles.news_feed_footer_icon_container}>
        <Text style={{ color: "white", paddingLeft: 12 }}>
          123 332 wyświetleń
        </Text>

        <Text style={{ color: "white", padding: 12 }}>
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
          dolor sit amet.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  news_feed_footer: {
    flex: 2,
    backgroundColor: "red",
  },
  news_feed_footer_icon_container: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "column",
  },
});
