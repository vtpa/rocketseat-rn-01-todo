import { useState, useRef } from "react";
import { View, Keyboard, FlatList } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NewTaskButton } from "../../components/NewTaskButton";
import { TasksInfo } from "../../components/TasksInfo";
import { EmptyInfo } from "../../components/EmptyInfo";
import { Task } from "../../components/Task";

export interface IToDo {
  id: string;
  description: string;
  completed: boolean;
}

export default function Home() {
  const [toDos, setToDos] = useState<IToDo[]>([]);
  const [newTask, setNewTask] = useState('');
  const flatListRef = useRef<FlatList<IToDo>>(null);

  function handleNewTask(){
    const newToDo = {
      id: String(Math.random()),
      description: newTask,
      completed: false,
    }
    setToDos(actual => [newToDo, ...actual]);
    setNewTask('');
    Keyboard.dismiss();
    flatListRef?.current?.scrollToItem({ animated: true, item: toDos[0] });
  }

  function handleCheckItem(id: string) {
    setToDos(actual => actual.map(
      toDo => ({
        ...toDo,
        completed: toDo.id === id ? true : toDo.completed
      })
    ));
  }

  function handleDeleteItem(id: string) {
    setToDos(actual => actual.filter(todo => todo.id !== id));
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.newTaskContainer}>
          <Input
            placeholder="Adicione uma nova tarefa"
            value={newTask}
            onChangeText={(text) => setNewTask(text)}
          />
          <NewTaskButton
            disabled={newTask.length === 0}
            onPress={handleNewTask}
          />
        </View>
        <View style={styles.tasksContainer}>
          <TasksInfo
            id="taskInfo"
            created={toDos.length}
            completed={toDos.filter(toDo => toDo.completed).length}
          />
          {toDos.length === 0
            ? <EmptyInfo />
            : <FlatList
                ref={flatListRef}
                data={toDos}
                renderItem={({item}) =>
                  <Task
                    data={item}
                    handleCheckPress={() => handleCheckItem(item.id)}
                    handleTrashPress={() => handleDeleteItem(item.id)}
                  />}
                keyExtractor={item => item.id}
              />
          }
        </View>
      </View>
    </View>
  );
}
