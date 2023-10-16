import { StatusBarContainer } from "./styles";

export function StatusBar() {
   return (
      <StatusBarContainer>
         <p>Tarefas criadas <span>0</span></p>
         <p>Concluidas <span>0</span></p>
      </StatusBarContainer>
   );
}