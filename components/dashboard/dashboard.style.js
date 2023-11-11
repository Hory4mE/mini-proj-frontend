import { StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  loading: {
    height: "100%",
    justifyContent: "center",
    alignSelf: "center",
  },
  timeContainer: (h) => ({
    width: "80%",
    height: h,
    top: -h / 2,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.lightGray,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: COLORS.white,
  }),
  text: (color) => ({
    fontFamily: FONT.bold,
    fontSize: 16,
    color: color ? color : COLORS.black,
  }),
  headerText: (color) => ({
    fontFamily: FONT.bold,
    fontSize: 20,
    color: color ? color : COLORS.black,
  }),
  littleText: (color) => ({
    fontFamily: FONT.bold,
    fontSize: 12,
    color: color ? color : COLORS.black,
  }),
  label: (color) => ({
    fontFamily: FONT.regular,
    fontSize: 12,
    color: color ? color : COLORS.black,
  }),
  headeContainer: {
    width: "100%",
    height: "25%",
    position: "absolute",
    justifyContent: "flex-start",
    paddingTop: "30%",
    paddingLeft: "4%",
  },
  orderContainer: (h) => ({
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 9,
    marginTop: 24,
  }),
  rightArrow: {
    width: 25,
    height: 25,
  },
  iconContainer: {
    width: "100%",
    flexDirection: "row",
    marginTop: 32,
  },
  iconbg: (w) => ({
    width: w,
    height: w,
    backgroundColor: COLORS.lightGray,
    borderRadius: 1000,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "5%",
  }),
  icon: {
    width: "70%",
    height: "70%",
    padding: "15%",
  },
});

export default styles;
