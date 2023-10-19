import { useState } from 'react';

import { InputTaksContainer } from './styles';

import { PlusCircle } from 'phosphor-react';

interface InputTaskProps {
   createNewTask: (task: string) => void;
}

export function InputTask({ createNewTask }: InputTaskProps) {
   const [task, setTask] = useState('');

   function handleSubmit(event: React.FormEvent) {
      event.preventDefault();
      createNewTask(task);

      setTask('');
   }

   function onChangeTask(event: React.ChangeEvent<HTMLInputElement>) {
      setTask(event.target.value);
   }

   return (
      <InputTaksContainer name='CreateTaskForm' onSubmit={handleSubmit}>
         <input
            name='CreateTaskInput'
            type="text"
            placeholder='Adicione uma nova tarefa'
            onChange={onChangeTask}
            value={task}
            autoComplete="off"
         />
         <button>
            Criar
            <PlusCircle size={20} />
         </button>
      </InputTaksContainer>
   );
}