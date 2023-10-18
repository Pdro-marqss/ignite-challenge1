import { AppContainerEmpty, Line } from './styles';

import { ClipboardText } from "phosphor-react";


export function EmptyList() {
   return (
      <AppContainerEmpty>
         <Line></Line>
         <ClipboardText size={53} />
         <p>Você ainda não tem tarefas cadastradas</p>
         <span>Crie tarefas e organize seus itens a fazer</span>
      </AppContainerEmpty>
   );
}