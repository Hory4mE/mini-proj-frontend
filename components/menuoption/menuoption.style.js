import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  uppernunderline: (color) => ({
    width: "50%",
    flexDirection: "row",
    justifyContent: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: color ? color : COLORS.gray,
    padding: 10,
  }),
  headerContainer: {
    flexDirection: "row",
    width: "100%",
  },
  headerText: (color) => ({
    fontFamily: FONT.regular,
    fontSize: 16,
    color: color ? color : COLORS.black,
  }),
  bottomContainer: {
    position: "absolute",
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
    backgroundColor: COLORS.lightGray,
    justifyContent: "center",
    alignItems: "center",
  }),
});

export default styles;
