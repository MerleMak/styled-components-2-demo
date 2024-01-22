import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

  :root {
    --color-primary: #364F6B;
    --color-secondary: #3FC1C9;
    --color-danger: #ff0000;
  }
`;
