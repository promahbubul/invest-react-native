import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CreateAccount = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0} // Adjust based on your header height
    >
      <View>
        <View style={styles.backBtn}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back-ios" size={23} color="#000" />
          </TouchableOpacity>
        </View>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.heading}>Create an account</Text>
          <Text style={styles.content}>Invest and double your income now</Text>
        </View>
        {/* Input Form */}
        <View style={styles.inputContainer}>
          <TextInput
            textContentType="name"
            cursorColor={"#31A062"}
            style={styles.input}
            placeholder="Full Name"
          />
          <TextInput
            keyboardType="email-address"
            textContentType="emailAddress"
            cursorColor={"#31A062"}
            style={styles.input}
            placeholder="Email address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            cursorColor={"#31A062"}
            secureTextEntry={true}
          />
        </View>
        {/* Button Group */}
        <View style={styles.btnGroup}>
          <TouchableOpacity style={styles.createButton}>
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
              Already have an account?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
export default CreateAccount;
