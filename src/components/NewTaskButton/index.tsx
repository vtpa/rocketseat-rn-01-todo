import { TouchableOpacity } from "react-native";
import PlusIcon from '../../assets/icons/plus.svg';
import { THEME } from "../../theme";
import { styles } from "./styles";
import { TouchableOpacityProps } from "react-native";

export function NewTaskButton({ ...rest }: TouchableOpacityProps) {
  return(
    <TouchableOpacity style={styles.container} { ...rest }>
      <PlusIcon width={16} height={16} color={THEME.COLORS.GRAY_100} />
    </TouchableOpacity>
  );
}
