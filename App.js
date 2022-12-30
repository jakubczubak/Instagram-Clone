import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from './src/navigators/MainNavigator'

export default function App() {
  return (
    <NavigationContainer>
    <MainNavigator></MainNavigator>

    </NavigationContainer>

  );
}


