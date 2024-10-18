import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import avatar from "../../../assets/avatar.png";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import loadingImg from "../../../assets/loading.gif";
import BioData from "../../components/contact/BioData";
import Footer from "../../components/shared/Footer";

const ContactInfo = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const pickImage = async () => {
    setLoading(true);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
    setLoading(false);
  };

  return (
    <View className="h-full ">
      <View className="flex-1   px-5 bg-white">
        {/* Heading */}
        <View className="mt-10  flex flex-row relative">
          <TouchableOpacity className="absolute">
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>
          <View className="  mx-auto">
            <Text className="text-center text-lg font-semibold ">
              Contact Info
            </Text>
          </View>
        </View>
        {/* Profile Pic */}
        <View className=" mt-11 w-40 mx-auto h-40 rounded-full relative">
          {loading ? (
            <View className="h-20 ">
              <Image
                source={loadingImg}
                className="w-full h-full rounded-full"
              />
            </View>
          ) : (
            <View>
              {image ? (
                <Image
                  source={{ uri: image }}
                  className="w-full h-full rounded-full"
                />
              ) : (
                <Image source={avatar} className="w-full h-full rounded-full" />
              )}
              <View className="bg-black/30 absolute inset-0 z-10 h-full w-full rounded-full"></View>
              <TouchableOpacity
                onPress={pickImage}
                className="absolute  w-full h-full  rounded-full flex items-center justify-center z-30"
              >
                <MaterialIcons name="mode-edit" size={30} color="white" />
              </TouchableOpacity>
            </View>
          )}
        </View>
        {/* Information */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="mt-5  last:border-b-0"
        >
          {/* Name */}
          <BioData label={"Name"} />
          <BioData label={"Birthdate"} />
          <BioData label={"Gender"} />
          <BioData label={"Email"} />
          <BioData label={"Phone Number"} />
          <BioData label={"Address"} />
        </ScrollView>
      </View>
    </View>
  );
};
export default ContactInfo;
