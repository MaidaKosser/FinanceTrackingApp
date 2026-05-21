import { useNavigation } from "@react-navigation/native";

export default function useController() {
  const navigation = useNavigation<any>();

  const goToHome = () => {
    navigation.navigate("Home");
  };

  return {
    goToHome,
  };
}