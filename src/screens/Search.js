import {
  StyleSheet,
  View,
  TextInput,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import { Dimensions } from "react-native";

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  return await response.json();
}

export const Search = ({ navigation }) => {
  const { data, isLoading, isError } = useQuery(["data"], fetchData, {
    placeholderData: [],
  });

  const windowWidth = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <View
        style={styles.search}>
        <EvilIcons
          name="search"
          size={24}
          color="white"
          style={styles.search_icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="#fff"
        ></TextInput>
      </View>
      <View style={styles.list_container}>
        <FlatList
          horizontal={false}
          numColumns={3}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
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
          }}
        ></FlatList>
      </View>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  input: {
    backgroundColor: "#4d4e53",
    paddingVertical: 8,
    paddingHorizontal: 35,
    width: "95%",
    borderRadius: 4,
    color: "#fff",
  },
  search: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
    padding: 8,
  },
  search_icon: {
    position: "absolute", 
    left: 20,
     bottom: 15, 
     zIndex: 2
  },
  list_container:{
    flex: 6,
     backgroundColor: "black"
  }
});
