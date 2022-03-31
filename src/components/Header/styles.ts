import Styled from "styled-components";

export const HeaderContainer = Styled.header`
  /* display */
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* width / height */
  height: 40px;

  /* margin/ padding */
  padding: 0 20px;

  div.logo-container {
    /* display */
    display: flex;
    align-items: center;
    column-gap: 15px;

    /* font */
    font-size: 28px;
    font-weight: 300;
    color: #333333;
  }

  button.logout {
    /* width / height */
    height: 32px;

    /* background */
    background: none;

    /* border */
    border: none;
  }
  
`