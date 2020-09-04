import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
        margin: 0;
        padding: 0;
    }
    html, body, #root, .App {
        min-height: 100vh;
        color: black;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 85.28%, #FFFFFF 100%);
    }
    #root {
        background-position: center;
        background-size: cover;
    }
`;
