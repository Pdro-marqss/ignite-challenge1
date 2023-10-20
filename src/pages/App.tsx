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

  function deleteTask(id: number) {
    const newTaskList = taskList.filter((task) => task.id !== id);

    setTaskList(newTaskList);
  }

  function markTaskAsCompleted(id: number) {
    const newTasks = taskList.map(task => {
      if (task.id === id) {
        return {
          ...task,
          isChecked: !task.isChecked
        };
      }
      return task;
    })

    setTaskList(newTasks);
  }

  console.log("Renderizou");

  return (
    <>
      <Header createNewTask={createNewTask} />
      <StatusBar taskList={taskList} />

      {taskList.length > 0
        ? <TaskList taskList={taskList} deleteTask={deleteTask} markTaskAsCompleted={markTaskAsCompleted} />
        : <EmptyList />}
    </>
  );
}
