import { StyleSheet, View, StatusBar, FlatList } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { SearchPhoto } from "./SearchPhoto";
import { SearchHeader } from "./SearchHeader";

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  return await response.json();
}

export const Search = ({ navigation }) => {
  const { data, isLoading, isError } = useQuery(["data"], fetchData, {
    placeholderData: [],
  });

  return (
    <View style={styles.container}>
      <SearchHeader />
      <View style={styles.list_container}>
        <FlatList
          horizontal={false}
          numColumns={3}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return <SearchPhoto item={item} navigation={navigation} />;
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
  list_container: {
    flex: 6,
    backgroundColor: "black",
  },
});
