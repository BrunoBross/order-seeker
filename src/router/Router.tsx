import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import Game from "../pages/Game";
import Home from "../pages/Home";
import GameConfig from "../pages/GameConfig";

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
    </Stack.Navigator>
  );
}
