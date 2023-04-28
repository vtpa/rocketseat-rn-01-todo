import { View, Text } from "react-native";
import { styles } from "./styles";

export interface TasksInfoProps {
  id: string;
  created: number;
  completed: number;
}

export function TasksInfo({ id, created, completed }: TasksInfoProps) {
  return (
    <View style={styles.container} id={id}>
      <View style={styles.infoContainer}>
        <Text style={styles.createdText}>Criadas</Text>
        <View style={styles.tasksCounterContainer}>
          <Text style={styles.tasksCounter}>{created}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.completedText}>Concluídas</Text>
        <View style={styles.tasksCounterContainer}>
          <Text style={styles.tasksCounter}>{completed}</Text>
        </View>
      </View>
    </View>
  );
}
