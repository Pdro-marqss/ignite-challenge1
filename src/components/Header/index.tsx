import { InputTask } from '../InputTask';

import Logo from '../../assets/logo-todo.svg';

import { HeaderContainer } from './styles';

interface HeaderProps {
   createNewTask: (task: string) => void;
}

export function Header({ createNewTask }: HeaderProps) {
   return (
      <HeaderContainer>
         <img src={Logo} alt="Icone de foguente com todo escrito do lado direito" />
         <InputTask createNewTask={createNewTask} />
      </HeaderContainer>
   );
}