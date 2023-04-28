import { TextInput, TextInputProps, View } from "react-native";

import { THEME } from "../../theme";
import { styles } from "./styles";

export function Input({ ...rest }: TextInputProps) {
  return (
    <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholderTextColor={THEME.COLORS.GRAY_300}
          {...rest}
        />
    </View>
  );
}