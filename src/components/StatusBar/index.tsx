import { StatusBarContainer } from "./styles";
import { Task } from "../../pages/App";

interface StatusBarProps {
   taskList: Task[];
}

export function StatusBar({ taskList }: StatusBarProps) {
   const FinishedTasks = taskList.filter(task => task.isChecked === true).length;


   return (
      <StatusBarContainer>
         <p>Tarefas criadas <span>{taskList.length}</span></p>
         <p>Concluidas <span>{FinishedTasks} de {taskList.length}</span></p>
      </StatusBarContainer>
   );
}