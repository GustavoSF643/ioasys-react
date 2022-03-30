import Styled from "styled-components";
import LoginBackgroundMobile from "../../assets/login_background_mobile.svg";
import LoginBackground from "../../assets/login_background.svg";

export const LoginContainer = Styled.div`
  /* display */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* width / height */
  height: 100vh;

  /* margin / padding */
  padding: 0 20px;

  /* background */
  background-image: url(${LoginBackgroundMobile});
  background-size: cover;

  .logo-container {
    /* display */
    display: flex;
    column-gap: 15px;

    /* width / height */
    width: 100%;

    /* font */
    font-size: 28px;
    font-weight: 300;
    color: #ffffff;
  }

  @media screen and (min-width: 768px) {
    align-items: start;

    /* margin / padding */
    padding: 0 100px;

    /* background */
    background-image: url(${LoginBackground});

    .login-form-container {
      width: 368px;
    }
  }
`