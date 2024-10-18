import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import styles from "./style";
import productsData from "../../../constant/products.constant";
import Footer from "../../components/shared/Footer";
const ProductScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>ProductScreen</Text>
      <View style={styles.header}></View>
      <FlatList
        data={productsData}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View key={item.id} style={styles.productCard}>
              <Text style={styles.productCardText}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <Footer navigation={navigation} />
    </View>
  );
};
export default ProductScreen;
