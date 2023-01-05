import { View, TouchableOpacity, Image } from "react-native";
import { Dimensions } from "react-native";


const windowWidth = Dimensions.get("window").width;


export const SearchPhoto = ({ item, navigation }) => {

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
          style={styles.image}
          source={{
            uri: item.url,
          }}
        ></Image>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: windowWidth / 3,
  }
});
