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
          style={styles.icon_padding}
        />
        <Text style={styles.text_white}>Lorem Lorem Lorem</Text>
        <Entypo
          name="dots-three-horizontal"
          size={24}
          color="white"
          style={styles.icon_absolute}
        />
      </View>
      <View style={styles.news_feed_image}>
        <Image
          style={styles.image}
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
    image: {
      width: "100%",
       height: 400
    },
    icon_absolute: {
      position: "absolute", 
      right: 10
    },
    text_white:{
      color: "white"
    },
    icon_padding: {
      padding: 12
    }
  });
  