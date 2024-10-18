import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
const ScreenHeader = ({ title, navigation }) => {
  return (
    <View className="mt-10  flex flex-row relative">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="absolute"
      >
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
      <View className="  mx-auto">
        <Text className="text-center text-lg font-semibold ">{title}</Text>
      </View>
    </View>
  );
};
export default ScreenHeader;
