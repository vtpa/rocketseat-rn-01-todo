import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  createdText: {
    fontFamily: THEME.FONTS.FAMILY.PRIMARY.BOLD,
    fontSize: THEME.FONTS.FAMILY.SIZE.LG,
    color: THEME.COLORS.PRIMARY,
  },
  completedText: {
    fontFamily: THEME.FONTS.FAMILY.PRIMARY.BOLD,
    fontSize: THEME.FONTS.FAMILY.SIZE.LG,
    color: THEME.COLORS.SECONDARY,
  },
  tasksCounterContainer: {
    marginLeft: 8,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 999,
    backgroundColor: THEME.COLORS.GRAY_400,
  },
  tasksCounter: {
    fontFamily: THEME.FONTS.FAMILY.PRIMARY.BOLD,
    fontSize: THEME.FONTS.FAMILY.SIZE.MD,
    color: THEME.COLORS.GRAY_200,
  }
});
