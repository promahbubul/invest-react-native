import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // borderColor: "red",
    // borderWidth: 2,
    flex: 1,
  },
  header: {
    marginTop: 40,
    marginRight: 20,
    marginLeft: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnText: {
    color: "white",
    textAlign: "center",
  },
  body: {
    marginTop: 18,
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
    // backgroundColor: "blue",
    color: "gray",
    fontSize: "20",
  },
 
  pageTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  totalAssetContainer: {
    backgroundColor: "green",
    padding: 30,
    borderRadius: 30,
    marginTop: 31,
  },
  totalAssetTitle: {
    fontWeight: "medium",
    fontSize: 16,
    color: "white",
  },
  totalAssetValue: {
    marginTop: 11,
    fontWeight: "semibold",
    fontSize: 32,
    color: "white",
  },
  assetValueContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  totalAssetBtn: {
    backgroundColor: "white",
    width: 120,
    paddingVertical: 11,
    borderRadius: 15,
  },
  totalAssetBtnText: {
    fontWeight: "semibold",
    fontSize: 14,
    textAlign: "center",
    color: "#31A078",
  },
  bestPlansContainer: {
    marginTop: 40,
  },
  bestPlanHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bestPlanTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
  },
  bestPlanBtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  bestPlanBtnText: {
    color: "#FE555D",
    fontWeight: "bold",
    fontSize: 18,
  },
  plans: {
    marginTop: 20,
  },
  planCard: {
    marginLeft: 10,
    position: "relative",
    left: -10,
  },
  placeCardImage: {},
});

export default styles;
