import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import Game from "../pages/Game";
import Home from "../pages/Home";
import GameConfig from "../pages/GameConfig";
import HowToPlay from "../pages/HowToPlay";
import AppConfig from "../pages/AppConfig";

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="GameConfig" component={GameConfig} />
      <Stack.Screen name="Game" component={Game} />
      <Stack.Screen name="HowToPlay" component={HowToPlay} />
      <Stack.Screen name="AppConfig" component={AppConfig} />
    </Stack.Navigator>
  );
}
