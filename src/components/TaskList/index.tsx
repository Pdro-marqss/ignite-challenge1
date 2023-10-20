import { TaskListContainer, TaskContainer, CheckedButton } from './styles';

import { Trash, Circle, CheckCircle } from 'phosphor-react';

import { Task } from '../../pages/App';

interface TaskListProps {
   taskList: Task[];
   deleteTask: (id: number) => void;
   markTaskAsCompleted: (id: number) => void;
}

export function TaskList({ taskList, deleteTask, markTaskAsCompleted }: TaskListProps) {
   return (
      <TaskListContainer>
         {taskList.map((task) => (
            <TaskContainer key={task.id}>
               <div>
                  <CheckedButton onClick={() => markTaskAsCompleted(task.id)}>
                     {task.isChecked ? <CheckCircle weight='fill' /> : <Circle />}
                  </CheckedButton>
                  <p>{task.task}</p>
               </div>
               <Trash size={24} onClick={() => deleteTask(task.id)} />
            </TaskContainer>
         ))}

      </TaskListContainer>
   );
}