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
                     {task.isChecked ? <CheckCircle className='iconChecked' weight='fill' /> : <Circle className='iconNotChecked' />}
                  </CheckedButton>
                  <p className={task.isChecked ? 'textChecked' : 'text'}>{task.task}</p>
               </div>
               <Trash className='trashIcon' size={30} onClick={() => deleteTask(task.id)} />
            </TaskContainer>
         ))}

      </TaskListContainer>
   );
}