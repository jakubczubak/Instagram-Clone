import { View, TouchableOpacity, Image } from "react-native";
import { Dimensions } from "react-native";

export const SearchPhoto = ({ item, navigation }) => {
  const windowWidth = Dimensions.get("window").width;

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Photo Details", {
            url: item.url,
            title: item.title,
            id: item.id,
          });
        }}
      >
        <Image
          style={{
            height: 150,
            width: windowWidth / 3,
          }}
          source={{
            uri: item.url,
          }}
        ></Image>
      </TouchableOpacity>
    </View>
  );
};
