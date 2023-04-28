import { View } from "react-native";

import LogoIcon from "../../assets/icons/logo.svg";
import { THEME } from "../../theme";
import { styles } from "./styles";

export function Header() {
    return (
        <View style={styles.container}>
        <LogoIcon 
            width={110} 
            height={32} 
            primaryColor={THEME.COLORS.PRIMARY} 
            secondaryColor={THEME.COLORS.SECONDARY_DARK}  
        />
    </View>
    );
}