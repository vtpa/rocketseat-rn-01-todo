import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: "center",
    borderTopColor: THEME.COLORS.GRAY_400,
    borderTopWidth: 1,
    paddingVertical: 48,
  },
  title: {
    marginTop: 16,
    marginBottom: 6,
    fontFamily: THEME.FONTS.FAMILY.PRIMARY.BOLD,
    fontSize: THEME.FONTS.FAMILY.SIZE.LG,
    color: THEME.COLORS.GRAY_300,
  },
  description: {
    fontFamily: THEME.FONTS.FAMILY.PRIMARY.REGULAR,
    fontSize: THEME.FONTS.FAMILY.SIZE.LG,
    color: THEME.COLORS.GRAY_300,
  }
});
