import styled from "styled-components";

export const TaskListContainer = styled.div`
   width: 80%;
   max-width: 730px;
   
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 12px;
   
   margin: 0 auto;
   margin-top: 30px;


   color: ${props => props.theme["gray-100"]};
`;

export const TaskContainer = styled.div`
   background: ${props => props.theme["gray-500"]};
   width: 100%;

   display: flex;
   align-items: start;
   justify-content: space-between;
   gap: 15px;

   border: 1px solid ${props => props.theme["gray-400"]};
   border-radius: 8px;

   padding: 16px;

   div {
      display: flex;
      flex: 1;
      gap: 20px;
   }
`;