import { create_global_style } from "styled-components";

const globalStyle = create_global_style`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: #f0f2f5;
    font-family: Arial, Helvetica, sans-serif
  }
`;

export default globalStyle;