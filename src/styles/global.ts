import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    ul, li {
        list-style: none;
    }
    a {
        text-decoration: none;
    }
    main{
        width: 100%;
  min-height: 100vh;

  background-color: ${({ theme }) => theme.fonts.colors.colorPrimaryBg};
    }
`;