import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body{
        font-family: Iransans;
        font-size: 1.6rem;
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        color:white;
    }

    * {
        box-sizing: border-box;
    }
    
    *:focus { outline: none}
    input, textarea, button, select, a, div { -webkit-tap-highlight-color: rgba(0,0,0,0); }
`