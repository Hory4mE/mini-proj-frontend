const COLORS = {
  primary: "#E35205",
  secondary: "#0077B6",
  tertiary: "#F7E680",

  lightGray: "#E4E4E4",
  gray: "#BCBCBC",
  drakGray: "#666666",

  white: "#FFFFFF",
  lightWhite: "#FAFAFC",
  black: "#000000",
};

const FONT = {
  regular: "regular",
  bold: "bold",
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
};

export { COLORS, FONT, SHADOWS };
