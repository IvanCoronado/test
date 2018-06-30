import { injectGlobal } from "styled-components";

const INTER_FONT_PATH = "/fonts/inter";

export default injectGlobal`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html, body, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  
  button:focus {
    outline: 0;
  }

  @font-face {
    font-family: 'Inter UI';
    font-weight: 900;
    src: url('${INTER_FONT_PATH}/Inter-Black.ttf') format('truetype');    
  }
  
  @font-face {
    font-family: 'Inter UI';
    font-weight: 900;
    font-style: italic;
    src: url('${INTER_FONT_PATH}/Inter-Black.ttf') format('truetype');    
  }
  
  @font-face {
    font-family: 'Inter UI';
    font-weight: 700;
    src: url('${INTER_FONT_PATH}/Inter-Bold.ttf') format('truetype');    
  }
  
  @font-face {
    font-family: 'Inter UI';
    font-weight: 700;
    font-style: italic;
    src: url('${INTER_FONT_PATH}/Inter-Bold.ttf') format('truetype');    
  }
  
  @font-face {
    font-family: 'Inter UI';
    font-weight: 500;
    src: url('${INTER_FONT_PATH}/Inter-Medium.ttf') format('truetype');    
  }
  
  @font-face {
    font-family: 'Inter UI';
    font-weight: 500;
    font-style: italic;
    src: url('${INTER_FONT_PATH}/Inter-Medium.ttf') format('truetype');    
  }
  
  @font-face {
    font-family: 'Inter UI';
    font-weight: 400;
    src: url('${INTER_FONT_PATH}/Inter-Regular.ttf') format('truetype');    
  }
  
  @font-face {
    font-family: 'Inter UI';
    font-weight: 400;
    font-style: italic;
    src: url('${INTER_FONT_PATH}/Inter-Regular.ttf') format('truetype');    
  }
`;
