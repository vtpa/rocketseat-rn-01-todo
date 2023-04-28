import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { IToDo } from "../../screens/Home";
import TrashIcon from '../../assets/icons/trash.svg'
import CheckIcon from '../../assets/icons/check.svg'
import { THEME } from "../../theme";

interface TaskProps {
  data: IToDo;
  handleCheckPress: () => void;
  handleTrashPress: () => void;
}

export function Task({ data, handleCheckPress, handleTrashPress }: TaskProps) {
  const textDecorationLine = data.completed ? "line-through" : "none";
  const color = data.completed ? THEME.COLORS.GRAY_300 : THEME.COLORS.GRAY_100;
  return (
    <View style={styles.container}>
      {data.completed ?
        <View style={styles.checkContainer}>
          <CheckIcon width={10} height={10} />
        </View>
      :
        <TouchableOpacity style={styles.uncheckedContainer} onPress={handleCheckPress} />
      }
      <View style={styles.descriptionContainer}>
        <Text style={[styles.descriptionText, { color, textDecorationLine } ]}>
          {data.description}
        </Text>
      </View>
      <TouchableOpacity style={styles.trashContainer} onPress={handleTrashPress}>
        <TrashIcon />
      </TouchableOpacity>
    </View>
  )
}
