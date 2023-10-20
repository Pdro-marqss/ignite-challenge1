import styled from "styled-components";

export const TaskListContainer = styled.div`
   width: 80%;
   max-width: 730px;
   max-height: 50dvh;
   
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 12px;
   
   margin: 0 auto;
   margin-top: 30px;

   overflow: auto;

   color: ${props => props.theme["gray-100"]};

   &&::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 12px;
}

   &&::-webkit-scrollbar-thumb {
      border-radius: 1px;
      background-color: rgba(0,0,0,.1);
      -webkit-box-shadow: 0 0 1px rgba(255,255,255,.2);
}
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
      flex: 1;
      display: flex;
      gap: 20px;

      .textChecked {
         color: ${props => props.theme["gray-300"]};
         text-decoration: line-through;
      }
   }

   svg {
      cursor: pointer;
   }

   .trashIcon {
      padding: 5px;
      &:hover {
         background: ${props => props.theme["gray-400"]};
         border-radius: 4px;
         color: ${props => props.theme.danger};
      }
   }
`;

export const CheckedButton = styled.button`
   min-width: 1.3rem;
   height: 1.3rem;

   background: none;
   border: none;

   svg {
      width: 100%;
      height: 100%;
      color: ${props => props.theme.purple};
   }

   .iconNotChecked {
      &:hover {
         opacity: 70%;
      }
   }

   .iconChecked {
      opacity: 75%;

      &:hover {
         opacity: 100%;
      }
   }
`;