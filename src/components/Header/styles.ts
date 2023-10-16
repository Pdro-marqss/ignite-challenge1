import styled from "styled-components";

export const HeaderContainer = styled.div`
   background-color: ${props => props.theme["gray-700"]};
   width: 100%;
   height: 200px;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   position: relative;

   img {
      width: 126px;
   }
`;