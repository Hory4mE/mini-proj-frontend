import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../constants";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  header: {
    fontFamily: FONT.regular,
    fontSize: 16,
    marginBottom: 12,
  },

  textContainer: {
    flexDirection: "row",
  },
  text: {
    fontFamily: FONT.bold,
    fontSize: 12,
    color: COLORS.drakGray,
  },
  inputText: {
    fontFamily: FONT.regular,
    fontSize: 16,
  },
  start: {
    fontFamily: FONT.bold,
    color: "#ff0000",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 10,
    marginBottom: 18,
  },
  picker: {
    borderRadius: 10,
    padding: 8,
  },
});

export default styles;
