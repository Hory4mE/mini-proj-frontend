import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../constants";

const styles = StyleSheet.create({
  container: (h, w) => ({
    width: "100%",
    height: "100%",
  }),
  animatedContainer: (fadeAnimation) => ({
    height: "100%",
    opacity: fadeAnimation,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
  }),
  header: {
    fontFamily: FONT.regular,
    fontSize: 20,
    marginBottom: 24,
  },
  pwdForget: {
    alignSelf: "flex-end",
    marginRight: "10%",
    marginVertical: 7,
  },
  pwdForgetText: {
    fontFamily: FONT.regular,
    fontSize: 12,
  },
  pwdSave: {
    fontFamily: FONT.regular,
    fontSize: 12,
    alignSelf: "flex-start",
    marginLeft: "10%",
  },
  textInput: {
    fontFamily: FONT.regular,
    fontSize: 16,
  },
  textContainer: {
    width: "80%",
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 10,
    padding: 10,
  },

  logo: (size) => ({
    width: size,
    height: size,
    marginBottom: 44,
  }),
  submitBtn: {
    height: 40,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    marginTop: 26,
  },
  submitText: {
    fontFamily: FONT.bold,
    fontSize: 16,
    color: COLORS.white,
  },
  registerText: {
    fontFamily: FONT.regular,
    fontSize: 16,
    textDecorationLine: "underline",
    marginTop: 24,
  },
});

export default styles;
