import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import Octicons from "@expo/vector-icons/Octicons";
import Feather from "@expo/vector-icons/Feather";

const footerNavData = [
  {
    id: 1,
    title: "Home",
    name: "HomePage",
    iconCom: AntDesign,
    iconName: "user",
  },
  {
    id: 2,
    title: "Product",
    name: "ProductScreen",
    iconCom: Feather,
    iconName: "search",
  },
  {
    id: 3,
    title: "TransitionScreen",
    name: "TransitionScreen",
    iconCom: Octicons,
    iconName: "arrow-switch",
  },
  {
    id: 4,
    title: "Account",
    name: "ProfileScreen",
    iconCom: FontAwesome6,
    iconName: "user",
  },
];

export default footerNavData;
