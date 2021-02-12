import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        font-size: 60.66%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0
    }

    body {
        -webkit-font-smoothing: antialiased;
        background: #FFF;
        font-family: 'Roboto', sans-serif;
    }

    body, input, button {
        font-size: 1.6rem;
        color: #333;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 50;
    }

    button {
        cursor: pointer;
    }
`;
