import { Image, Text, TouchableOpacity, View } from "react-native";
import signUpBanner from "../../../assets/signup/banner.png";
import { styles } from "./style";

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={signUpBanner} height={273} width={300} />
      <Text style={styles.heading}>Stay on top of your finance with us.</Text>
      <Text style={styles.content}>
        We are your new financial Advisors to recommed the best investments for
        you.
      </Text>
      {/* Button Group */}
      <View style={styles.btnGroup}>
        <TouchableOpacity
          onPress={() => navigation.navigate("CreateAccount")}
          style={styles.createButton}
        >
          <Text style={styles.createBtnText}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("HomePage")}
          style={[
            styles.createButton,
            { backgroundColor: "white", marginTop: 10 },
          ]}
        >
          <Text style={[styles.createBtnText, { color: "#31A062" }]}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SignUp;
