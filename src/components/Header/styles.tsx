import { StyleSheet } from "react-native";
import { THEME } from "../../theme";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: RFValue(70),
        backgroundColor: THEME.COLORS.GRAY_700,
        width: '100%'
    }
  });