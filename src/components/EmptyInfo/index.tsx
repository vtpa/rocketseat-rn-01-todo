import { View, Text } from "react-native";
import { styles } from "./styles";
import EmptyIcon from '../../assets/icons/empty.svg'

export function EmptyInfo() {
  return (
    <View style={styles.container}>
      <EmptyIcon width={56} height={56} />
      <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.description}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  );
}
