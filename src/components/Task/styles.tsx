import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: "center",
    flexDirection: "row",
    borderColor: THEME.COLORS.GRAY_400,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: THEME.COLORS.GRAY_500,
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginBottom: 8
  },
  checkContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: THEME.COLORS.SECONDARY_DARK,
    padding: 4,
    borderRadius: 999,
    marginRight: 12,
    marginLeft: 4
  },
  uncheckedContainer: {
    borderColor: THEME.COLORS.PRIMARY,
    borderWidth: 1,
    padding: 7,
    borderRadius: 999,
    marginRight: 12,
    marginLeft: 4
  },
  descriptionContainer: {
    flex: 1,
  },
  descriptionText: {
    fontFamily: THEME.FONTS.FAMILY.PRIMARY.REGULAR,
    fontSize: THEME.FONTS.FAMILY.SIZE.LG
  },
  trashContainer: {}
});
