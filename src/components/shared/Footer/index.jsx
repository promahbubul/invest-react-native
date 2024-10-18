import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import Octicons from "@expo/vector-icons/Octicons";
import Feather from "@expo/vector-icons/Feather";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import footerNavData from "../../../../constant/footernav.constant";
const Footer = ({ navigation }) => {
  console.log(navigation);
  return (
    <View style={[styles.footer]}>
      <View style={styles.bottomNav}>
        {footerNavData.map(({ id, name, title, iconCom: Icon, iconName }) => (
          <TouchableOpacity
            key={id}
            onPress={() => navigation.navigate(name)}
            style={styles.bottomNavBtn}
          >
            <Icon name={iconName} size={24} color="black" />
            <Text>{title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
export default Footer;
