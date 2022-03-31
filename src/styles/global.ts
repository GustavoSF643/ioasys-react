import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #AB2680;
    --font-family-primary: 'Heebo', sans-serif;
  }
  
  * {
    /* margin/padding */
    margin: 0;
    padding: 0;

    /* box */
    box-sizing: border-box;

    /* font */
    font-family: var(--font-family-primary);
  }

  button {
    cursor: pointer;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
  }
`

export default GlobalStyle;