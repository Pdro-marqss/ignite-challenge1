import styled from "styled-components";

export const InputTaksContainer = styled.form`
   width: 80%;
   max-width: 736px;
   height: 54px;

   position: absolute;
   bottom: -25px;

   display: flex;
   gap: 8px;
   flex: 1;

   input {
      background: ${props => props.theme["gray-500"]};
      flex: 1;
      padding: 15px;
      border: 1px solid ${props => props.theme["gray-700"]};
      border-radius: 8px;

      color: ${props => props.theme["gray-100"]};

      outline-color: ${props => props.theme["purple-dark"]};

      &::placeholder {
         color: ${props => props.theme["gray-300"]};
      }
   }

   button {
      background: ${props => props.theme["blue-dark"]};
      padding: 16px;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;

      border: none;
      border-radius: 8px;

      color: ${props => props.theme["gray-100"]};
      font-size: 1rem;
      font-weight: 700;

      cursor: pointer;

      &:hover {
         background: ${props => props.theme["blue"]};

      }
   }
`;