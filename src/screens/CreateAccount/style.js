import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  
  container: {
    width: "100%",
    backgroundColor: "white",
    flex: 1,
    // borderColor: "red",
    // borderWidth: 3,
    paddingTop: 60,
    paddingHorizontal: 36,
  },
  
  backBtn: {
    cursor: "pointer",
    position: "relative",
    left: -10,
    marginBottom: 20,
  },
  header: {
    paddingHorizontal: 5,
    // borderWidth: 2,
    // borderColor: "red",
  },
  heading: {
    fontSize: 33,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  content: {
    textAlign: "center",
    color: "#4F4F4F",
    fontSize: 17,
    fontWeight: "semibold",
  },
  inputContainer: {
    marginTop: 70,
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  input: {
    borderColor: "#828282",
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 25,
    fontSize: 17,
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
