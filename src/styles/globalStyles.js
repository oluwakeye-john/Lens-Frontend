import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body{
        margin: 0;
        font-family: Segoe UI, Helvetica Neue, Helvetica, Lucida Grande, Arial, Ubuntu,
            Cantarell, Fira Sans, sans-serif;
        ${"" /* background-image: url("./whatsapplight.png"); */}
    }
    * {
        box-sizing: border-box;
    }
    a {
        color: ${({ theme }) => theme.primaryColor1};
    }
`;

export default GlobalStyles;
