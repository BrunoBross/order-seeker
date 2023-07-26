import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

interface BackButtonProps extends TouchableOpacityProps {}

export default function BackButton(props: BackButtonProps) {
  return (
    <TouchableOpacity className="mt-8 ml-[8vw]">
      <Ionicons name="arrow-back-outline" size={40} color="white" {...props} />
    </TouchableOpacity>
  );
}
