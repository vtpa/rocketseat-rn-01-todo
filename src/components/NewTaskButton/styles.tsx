import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    backgroundColor: THEME.COLORS.PRIMARY_DARK,
    borderRadius: 6,
    marginLeft: 4,
  }
});
