import { styled } from 'styled-components';

export const AppContainerEmpty = styled.div`
   width: 80%;
   max-width: 736px;

   display: flex;
   flex-direction: column;
   align-items: center;

   margin: 0 auto;

   color: ${props => props.theme['gray-300']};

   p {
      font-size: 1.1rem;
      font-weight: 700;
      margin-top: 12px;
      line-height: 1.8rem;
   }
`;

export const Line = styled.div`
   background: ${props => props.theme['gray-400']};
   width: 100%;
   max-width: 736px;
   height: 2px;
   
   margin: 30px auto;
   margin-bottom: 55px;
`;