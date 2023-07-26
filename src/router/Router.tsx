import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import Home from "../screens/Home";
import GameConfig from "../screens/GameConfig";
import HowToPlay from "../screens/HowToPlay";
import AppConfig from "../screens/AppConfig";
import GameWrapper from "../screens/GameWrapper";

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
      <Stack.Screen name="Game" component={GameWrapper} />
      <Stack.Screen name="HowToPlay" component={HowToPlay} />
      <Stack.Screen name="AppConfig" component={AppConfig} />
    </Stack.Navigator>
  );
}
