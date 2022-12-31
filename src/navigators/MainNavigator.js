import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NewsFeed } from "../screens/NewsFeed";
import { Search } from "../screens/Search";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Movies } from "../screens/Movies";
import { Shop } from "../screens/Shop";
import { Profile } from "../screens/Profile";
import { PhotoDetails } from "../screens/PhotoDetails";

const Tab = createBottomTabNavigator();

export function MainNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="News feed"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "black",
        },
      }}
    >
      <Tab.Screen
        name="News feed"
        component={NewsFeed}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={25} color="white" />
            ) : (
              <Feather name="home" size={24} color="white" />
            ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome5 name="search" size={25} color="white" />
            ) : (
              <Octicons name="search" size={24} color="white" />
            ),
        }}
      />
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="play-circle" size={25} color="white" />
            ) : (
              <Ionicons name="play-circle-outline" size={24} color="white" />
            ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons name="shopping" size={25} color="white" />
            ) : (
              <MaterialCommunityIcons
                name="shopping-outline"
                size={24}
                color="white"
              />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome name="user-circle" size={25} color="white" />
            ) : (
              <FontAwesome name="user-circle-o" size={24} color="white" />
            ),
        }}
      />

      <Tab.Screen
        name="Photo Details"
        component={PhotoDetails}
        options={{
          tabBarVisible: false,
          tabBarButton: (props) => null,
        }}
      />
    </Tab.Navigator>
  );
}
