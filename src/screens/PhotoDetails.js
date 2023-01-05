import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { NewsFeedFooter } from "./NewsFeedFooter";
import { NewsFeedHeader } from "./NewsFeedHeader";
import { NewsFeedPhoto } from "./NewsFeedPhoto";

export const PhotoDetails = ({ route, navigation }) => {
  const { url, title, id } = route.params;

  const item = {
    url: url,
    title: title,
    id: id,
  };

  return (
    <View style={styles.container}>
      <NewsFeedHeader />
      <View style={styles.news_feed_container}>
        <NewsFeedPhoto item={item} />
        <NewsFeedFooter />
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
  news_feed_container: {
    flex: 5,
    backgroundColor: "black",
  },
});
