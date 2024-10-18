import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    paddingHorizontal: 34,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 37,
  },
  content: {
    fontSize: 18,
    fontWeight: "semibold",
    textAlign: "center",
    marginTop: 10,
    color: "#4F4F4F",
  },
  createButton: {
    backgroundColor: "#31A062",
    width: "100%",
    color: "white",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 15,
  },
  createBtnText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "semibold",
  },
  btnGroup: {
    marginTop: 40,
    width: "100%",
  },
});

export { styles };
