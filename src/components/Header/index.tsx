import { InputTask } from '../InputTask';

import Logo from '../../assets/logo-todo.svg';

import { HeaderContainer } from './styles';

export function Header() {
   return (
      <HeaderContainer>
         <img src={Logo} alt="Icone de foguente com todo escrito do lado direito" />
         <InputTask />
      </HeaderContainer>
   );
}