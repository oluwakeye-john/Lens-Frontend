import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body{
        margin: 0;
        font-family: Segoe UI, Helvetica Neue, Helvetica, Lucida Grande, Arial, Ubuntu,
            Cantarell, Fira Sans, sans-serif;
            overflow: hidden;
        color: black;
        
    }
    * {
        box-sizing: border-box;
    }
    a {
        color: ${({ theme }) => theme.primaryColor1};
    }
`;

export default GlobalStyles;

//font-family: Lato, Helvetica, Arial;;

// ${"" /* background-image: url("./whatsapplight.png"); */}
