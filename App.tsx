import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import Router from "./src/router/Router";
import LanguageProvider from "./src/contexts/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <NavigationContainer theme={DarkTheme}>
        <View className="w-full h-full">
          <Router />
          <StatusBar style="light" />
        </View>
      </NavigationContainer>
    </LanguageProvider>
  );
}
