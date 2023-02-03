import { createGlobalStyle } from "styled-components"
export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    background:${(props) => props.theme["background-app"]};
    color: ${(props) => props.theme["base-text"]};
    -webkit-font-smooting: antialiased;
}

body,input, textarea,button, h2{
    font-family: 'Roboto', sans-serif;
    font-weight:400;
    font-size:1rem;
}

input::-webkit-outer-spin-button, input::-webkit-inner-spin-button{
    -webkit-appearance:none;
    margin:0;
}

input[type="number"]{
    -moz-appearance:textfield;
}

button{
    cursor:pointer;
}

`
