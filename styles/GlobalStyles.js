import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    background: ${({ theme }) => theme.color.bg};
    color: ${({ theme }) => theme.color.white};
    font-family: 'Source Sans Pro', sans-serif;
  }
`;

export default GlobalStyles;
