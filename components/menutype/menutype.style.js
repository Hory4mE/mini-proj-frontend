import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../constants";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 2,
  },
  loading: {
    height: "100%",
    justifyContent: "center",
    alignSelf: "center",
  },
  headerText: (color) => ({
    fontFamily: FONT.bold,
    fontSize: 16,
    color: color ? color : COLORS.black,
  }),
  text: (color) => ({
    fontFamily: FONT.regular,
    fontSize: 14,
    color: color ? color : COLORS.black,
  }),
  littleText: (color) => ({
    fontFamily: FONT.regular,
    fontSize: 12,
    color: color ? color : COLORS.black,
  }),
  bottomContainer: {
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderColor: COLORS.gray,
  },
  botton: (h) => ({
    width: h,
    height: 32,
    borderRadius: 10,
    marginVertical: 12,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  }),
  center: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  forkiconbg: (w) => ({
    height: w,
    width: w,
    borderRadius: 1000,
    backgroundColor: COLORS.lightGray,
    justifyContent: "center",
    alignItems: "center",
  }),
  forkicon: {
    height: "75%",
    width: "75%",
  },
  itemContainer: {
    height: 60,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.lightGray,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "6%",
    flexDirection: "row",
  },
  pencilicon: {
    height: 30,
    width: 30,
  },
});

export default styles;
