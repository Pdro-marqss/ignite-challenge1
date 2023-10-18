import { useState } from 'react';
import { Header } from "../components/Header";
import { StatusBar } from "../components/StatusBar";
import { EmptyList } from "../components/EmptyList";
import { TaskList } from "../components/TaskList";

export interface Task {
  isChecked: boolean;
  task: string;
}

export function App() {
  const [taskList, setTaskList] = useState<Task[]>([]);

  return (
    <>
      <Header />
      <StatusBar />

      {taskList.length > 0 ? <TaskList taskList={taskList} /> : <EmptyList />}


    </>
  );
}
