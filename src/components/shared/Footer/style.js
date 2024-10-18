import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bottomNav: {
    display: "flex",
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomNavBtn: {
    // borderWidth: 2,
    // borderColor: "green",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
  },
  footer: {
    paddingHorizontal: 30,
    shadowOffset: true,
    paddingVertical: 5,
    // borderTopColor: "orange",
    // borderTopWidth: 2,
    backgroundColor: "#e0dede",
    borderTopStartRadius: 25,
    borderTopRightRadius: 25,
  },
});

export { styles };
