import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { NewsFeedHeader } from "./NewsFeedHeader";
import { NewsFeedFooter } from "./NewsFeedFooter";
import { NewsFeedPhoto } from "./NewsFeedPhoto";

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  return await response.json();
}

export const NewsFeed = () => {
  const { data, isLoading, isError } = useQuery(["data"], fetchData, {
    placeholderData: [],
  });

  return (
    <View style={styles.container}>
      <NewsFeedHeader />
      <View style={styles.news_feed_container}>
        {isLoading && <Text>Loading...</Text>}
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          isLoading={isLoading}
          renderItem={({ item, index }) => {
            return (
              <>
                <NewsFeedPhoto item={item} />
                <NewsFeedFooter />
              </>
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
    flexDirection: "column",
  },
  news_feed_container: {
    flex: 5,
    backgroundColor: "black",
  },

});
