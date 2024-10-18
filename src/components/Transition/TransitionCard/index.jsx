import { Image, Text, View } from "react-native";

import Entypo from "@expo/vector-icons/Entypo";
import { TouchableOpacity } from "react-native";

const TransitionCard = ({ item }) => {
  return (
    <TouchableOpacity className="flex flex-row mt-2 bg-white py-8 pl-5 px-5 rounded-md relative ">
      <View className="flex flex-row gap-[12px]  w-12/12 ">
        <Image source={item?.img} />
        <View>
          <Text className="text-gray1 font-semibold text-lg">
            {item.bankName} - {item.accountNumber}
          </Text>
          <Text className="text-dark1 text-sm font-normal">
            {item.accountName}
          </Text>
        </View>
      </View>
      <TouchableOpacity className="absolute right-2 top-5">
        <Entypo name="dots-three-vertical" size={20} color="black" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
export default TransitionCard;
