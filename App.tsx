import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import Router from "./src/router/Router";

export default function App() {
  return (
    <View className="w-full h-full">
      <NavigationContainer theme={DarkTheme}>
        <Router />
      </NavigationContainer>
      <StatusBar style="light" />
    </View>
  );
}
