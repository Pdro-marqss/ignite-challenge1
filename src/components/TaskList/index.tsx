import { TaskListContainer, TaskContainer } from './styles';

import { Trash } from 'phosphor-react';

import { Task } from '../../pages/App';

interface TaskListProps {
   taskList: Task[];
   deleteTask: (id: number) => void
}

export function TaskList({ taskList, deleteTask }: TaskListProps) {
   return (
      <TaskListContainer>
         {taskList.map((task) => (
            <TaskContainer key={task.id}>
               <div>
                  <input name='Checkbox' type="checkbox" />
                  <p>{task.task}</p>
               </div>
               <Trash size={24} onClick={() => deleteTask(task.id)} />
            </TaskContainer>
         ))}

      </TaskListContainer>
   );
}