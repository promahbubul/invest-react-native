import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    borderWidth: 4,
    borderColor: "red",
    // flex: 1,
    height: "100%",
  },
  header: {
    height: 40,
    backgroundColor: "orange",
  },
  main: {
    height: "100%",
    // backgroundColor: "blue",
  },
  footer: {
    height: 60,
    backgroundColor: "gray",
  },
  productCard: {
    padding: 20,
    backgroundColor: "white",
    marginTop: 3,
  },
  productCardText: {
    fontSize: 20,
    fontWeight: "semibold",
  },
});

export default styles;
