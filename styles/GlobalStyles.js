import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    background: #ED213A;
    color: ${({ theme }) => theme.color.white};
  }
`;

export default GlobalStyles;
