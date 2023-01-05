import { Text, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export const NewsFeedFooter = () => {
  return (
    <View style={styles.news_feed_footer}>
      <View
        style={styles.icon_wrapper}>
        <AntDesign
          name="hearto"
          size={24}
          color="white"
          style={styles.icon_padding}
        />
        <Feather name="send" size={24} color="white" style={styles.icon_padding} />
        <Feather
          name="message-circle"
          size={24}
          color="white"
          style={styles.icon_padding}
        />
        <FontAwesome
          name="bookmark-o"
          size={24}
          color="white"
          style={styles.icon_absolute}
        />
      </View>
      <View style={styles.news_feed_footer_icon_container}>
        <Text style={styles.text_padding}>
          123 332 wyświetleń
        </Text>

        <Text style={styles.text_padding}>
          Lorem ipsum dolor sit amet. Lorem ipsum.
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
  icon_wrapper: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "row",
  },
  text_padding: {
    color: "white",
     padding: 12
  },
  icon_padding: {
    padding: 16
  },
  icon_absolute: {
    padding: 16, 
    position: "absolute", 
    right: 10
  }
});
