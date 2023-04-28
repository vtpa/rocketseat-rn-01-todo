import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 52,
    borderRadius: 6,
    padding: 16,
    backgroundColor: THEME.COLORS.GRAY_500,
    borderWidth: 1,
    borderColor: THEME.COLORS.GRAY_700,

    color: THEME.COLORS.GRAY_100,
    fontFamily: THEME.FONTS.FAMILY.PRIMARY.REGULAR,
    fontSize: THEME.FONTS.FAMILY.SIZE.XL
  }
});
