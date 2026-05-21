import { useNavigation } from "@react-navigation/native";

export default function useController() {
  const navigation = useNavigation<any>();

  const goToProfile = () => {
    navigation.navigate("Profile");
  };

  return {
    goToProfile,
  };
}