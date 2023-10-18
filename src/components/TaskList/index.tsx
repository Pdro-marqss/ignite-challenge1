import { TaskListContainer, TaskContainer } from './styles';

import { Trash } from 'phosphor-react';

import { Task } from '../../pages/App';

interface TaskListProps {
   taskList: Task[];
}

export function TaskList({ taskList }: TaskListProps) {
   return (
      <TaskListContainer>
         {taskList.map((task) => (
            <TaskContainer>
               <div>
                  <input type="checkbox" />
                  <p>{task.task}</p>
               </div>
               <Trash size={24} />
            </TaskContainer>
         ))}

      </TaskListContainer>
   );
}