import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import Router from "./src/router/Router";
import LanguageProvider from "./src/contexts/LanguageContext";

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <LanguageProvider>
        <View className="w-full h-full">
          <Router />
          <StatusBar style="light" />
        </View>
      </LanguageProvider>
    </NavigationContainer>
  );
}
