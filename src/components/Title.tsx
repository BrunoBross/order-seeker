import { Text } from "react-native";

interface TitleProps {
  text: string;
}

export default function Title(props: TitleProps) {
  const { text } = props;

  return (
    <Text className="mb-5 text-4xl font-extrabold text-white">{text}</Text>
  );
}
