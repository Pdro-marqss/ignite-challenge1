import styled from "styled-components";

export const StatusBarContainer = styled.div`
   /* border: 1px solid red; */
   width: 80%;
   max-width: 730px;
   
   display: flex;
   align-items: center;
   justify-content: space-between;

   margin: 0 auto;
   margin-top: 100px;

   font-weight: 700;

   p:nth-child(1) {
      color: ${props => props.theme["blue"]};
   }

   p:nth-child(2) {
      color: ${props => props.theme["purple"]};
   }

   span {
      background: ${props => props.theme["gray-400"]};
      width: 25px;
      height: 19px;

      border-radius: 999px;
      padding: 2px 9px;

      margin-left: 5px;

      color: ${props => props.theme["gray-200"]};
   }
`;