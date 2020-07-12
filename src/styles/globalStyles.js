import { createGlobalStyle } from "styled-components";
// import Bck from "../whatsapplight.png";

const GlobalStyles = createGlobalStyle`
    body{
        margin: 0;
        font-family: Segoe UI, Helvetica Neue, Helvetica, Lucida Grande, Arial, Ubuntu,
            Cantarell, Fira Sans, sans-serif;
        color: black;
        ${"" /* background-image: url("${Bck}"); */}
    }
    * {
        box-sizing: border-box;
    }
    a {
        color: ${({ theme }) => theme.primaryColor1};
    }
`;
// overflow: hidden;
export default GlobalStyles;

//font-family: Lato, Helvetica, Arial;;
