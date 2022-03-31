import Styled from "styled-components";

export const HomeContainer = Styled.div`
  /* width / height */
  width: 100vw;
  min-height: 100vh;

  /* margin / padding */
  padding-top: 30px;

  /* background */
  background: #E5E5E5;

  div.books-container {
    /* display */
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    /* margin / padding */
    margin: 15px;
  }
`