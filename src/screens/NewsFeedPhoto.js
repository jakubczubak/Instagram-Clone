import { View, Text, Image, StyleSheet} from 'react-native'
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export const NewsFeedPhoto = ( {item} ) => {
  return (
    <>
      <View style={styles.news_feed_header}>
        <FontAwesome
          name="user-circle-o"
          size={30}
          color="white"
          style={{ padding: 12 }}
        />
        <Text style={{ color: "white" }}>Lorem Lorem Lorem</Text>
        <Entypo
          name="dots-three-horizontal"
          size={24}
          color="white"
          style={{ position: "absolute", right: 10 }}
        />
      </View>
      <View style={styles.news_feed_image}>
        <Image
          style={{ width: "100%", height: 400 }}
          source={{
            uri: item.url,
          }}
        ></Image>
      </View>
    </>
  );
};


const styles = StyleSheet.create({
    news_feed_header: {
      flex: 1,
      backgroundColor: "black",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "flex-start",
      paddingTop: 20,
    },
    news_feed_image: {
      flex: 7,
      backgroundColor: "pink",
    },
  });
  