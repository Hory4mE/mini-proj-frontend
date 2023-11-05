import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  logocontainer: (fadeAnimation) => ({
    flex: 1,
    opacity: fadeAnimation,
    alignItems: "center",
    justifyContent: "center",
  }),
  logo: (size) => ({
    width: size,
    height: size,
  }),
});

export default styles;
