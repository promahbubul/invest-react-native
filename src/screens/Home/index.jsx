import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Octicons from "@expo/vector-icons/Octicons";

import { LinearGradient } from "expo-linear-gradient";
import plan1 from "../../../assets/best-plans/gold.png";
import plan2 from "../../../assets/best-plans/silver.png";
import plan3 from "../../../assets/best-plans/platinum.png";
import styles from "./style";
import Footer from "../../components/shared/Footer";
import planData from "../../../constant/plans.constant";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="menu" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Octicons name="bell" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {/* Body */}
      <ScrollView style={styles.body}>
        <View>
          <Text style={styles.pageTitle}>Welcome, Jessie.</Text>
        </View>
        <LinearGradient
          colors={["#31A078", "#31A05F"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.totalAssetContainer}
        >
          <Text style={styles.totalAssetTitle}>Your total asset portfolio</Text>
          <View style={styles.assetValueContainer}>
            <Text style={styles.totalAssetValue}>N203935</Text>
            <TouchableOpacity style={styles.totalAssetBtn}>
              <Text style={styles.totalAssetBtnText}>Invest Now</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
        <View style={styles.bestPlansContainer}>
          {/* Heading */}
          <View style={styles.bestPlanHeader}>
            <Text style={styles.bestPlanTitle}>Best Plans</Text>
            <TouchableOpacity style={styles.bestPlanBtn}>
              <Text style={styles.bestPlanBtnText}>See All →</Text>
            </TouchableOpacity>
          </View>
          {/* Plans Container */}
          <FlatList
            data={planData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity key={item.id} style={styles.planCard}>
                <Image style={styles.placeCardImage} source={item.img} />
              </TouchableOpacity>
            )}
          />
          {/* Plans Card 1 */}
        </View>
      </ScrollView>
      {/* Footer */}
      <Footer navigation={navigation} />
    </View>
  );
};
export default Home;
