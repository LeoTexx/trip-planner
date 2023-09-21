import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   body {
      margin: 0px;
      font-family: Inter;
      font-size: 12px;
      font-weight: 500;
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.font};
      margin-top: 200px;
      @media (max-width: 600px) {
         margin-top: 100px;
      }
   }
   input {
      color: ${({ theme }) => theme.colors.font};
   }
`;
