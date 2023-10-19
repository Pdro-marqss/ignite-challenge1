import { useState } from 'react';
import { Header } from "../components/Header";
import { StatusBar } from "../components/StatusBar";
import { EmptyList } from "../components/EmptyList";
import { TaskList } from "../components/TaskList";

export interface Task {
  id: number;
  isChecked: boolean;
  task: string | undefined;
}

export function App() {
  const [taskList, setTaskList] = useState<Task[]>([]);

  function createNewTask(task: string) {
    const newTask: Task = {
      id: new Date().getTime(),
      isChecked: false,
      task: task
    }

    setTaskList(state => [...state, newTask]);
  }

  console.log("Renderizou");

  return (
    <>
      <Header createNewTask={createNewTask} />
      <StatusBar />

      {taskList.length > 0
        ? <TaskList taskList={taskList} />
        : <EmptyList />}
    </>
  );
}
