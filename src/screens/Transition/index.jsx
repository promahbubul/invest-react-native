import { View, Text, Image, FlatList } from "react-native";
import ScreenHeader from "../../components/shared/ScreenHeader";

import { TouchableOpacity } from "react-native";
import transitionData from "../../../constant/transition.constant";
import TransitionCard from "../../components/Transition/TransitionCard";

const TransitionScreen = ({ navigation }) => {
  return (
    <View className="px-5 bg-[#F6F6F9] h-full  border-blue-500">
      <ScreenHeader navigation={navigation} title={"Bank of account info"} />
      {/* Card Container */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={transitionData}
        renderItem={({ item }) => <TransitionCard key={item.id} item={item} />}
        className="mt-7"
      ></FlatList>
    </View>
  );
};
export default TransitionScreen;
