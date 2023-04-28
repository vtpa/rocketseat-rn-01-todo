import { RFValue } from "react-native-responsive-fontsize";

export const THEME = {
    COLORS: {
      PRIMARY: "#4EA8DE",
      PRIMARY_DARK: "#1E6F9F",
      SECONDARY: "#8284FA",
      SECONDARY_DARK: "#5E60CE",

      GRAY_700: "#0D0D0D",
      GRAY_600: "#1A1A1A",
      GRAY_500: "#262626",
      GRAY_400: "#333333",
      GRAY_300: "#808080",
      GRAY_200: "#D9D9D9",
      GRAY_100: "#F2F2F2",

      DANGER: "#E25858",
    },

    FONTS: {
      FAMILY: {
        PRIMARY: {
          REGULAR: "Inter_400Regular",
          BOLD: "Inter_700Bold",
        },
        SIZE: {
          MD: RFValue(12),
          LG: RFValue(14),
          XL: RFValue(16)
        }
      },
    },

    SIZE: {
      XS: RFValue(12),
      SM: RFValue(14),
      MD: RFValue(16),
      LG: RFValue(18),
      XL: RFValue(20),
      XXL: RFValue(24),
      XXXL: RFValue(32),
    }
  };
