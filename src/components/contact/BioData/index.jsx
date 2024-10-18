import { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";

const BioData = ({ label, title, onPress }) => {
  const [showInput, setShowInput] = useState(false);
  return (
    <View className="mt-5 border-b-[0.5px] last:border-b-0">
      <Text className="text-sm text-dark1">{label}</Text>
      <View className=" relative pb-3 pt-2">
        {showInput ? (
          <TextInput />
        ) : (
          <Text className="text-lg font-normal text-dark1">Warren Buffet</Text>
        )}

        <TouchableOpacity
          onPress={() => setShowInput(!showInput)}
          className="absolute right-4"
        >
          <Text className=" text-green1 text-xs font-semibold ">Change</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default BioData;
