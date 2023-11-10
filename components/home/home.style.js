import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: "100%",
    paddingVertical: 32,
  },
  animatedContainer: (fadeAnimation) => ({
    height: "100%",
    opacity: fadeAnimation,
    alignItems: "center",
    justifyContent: "center",
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
  inputText: {
    fontFamily: FONT.regular,
    fontSize: 16,
  },
  inputContainer: {
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
