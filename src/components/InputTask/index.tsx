import { InputTaksContainer } from './styles';

import { PlusCircle } from 'phosphor-react';

export function InputTask() {
   return (
      <InputTaksContainer>
         <input type="text" placeholder='Adicione uma nova tarefa' />
         <button>
            Criar
            <PlusCircle size={20} />
         </button>
      </InputTaksContainer>
   );
}