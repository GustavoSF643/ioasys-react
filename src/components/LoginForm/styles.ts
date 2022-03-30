import Styled from "styled-components";

export const StyledForm = Styled.form`
  width: 100%;

  div.field {
    /* display */
    display: flex;
    align-items: center;
    row-gap: 5px;

    /* position */
    position: relative;

    /* width / height */
    height: 60px;

    /* margin ; padding*/
    margin: 15px 0;
    padding: 0 15px;

    /* background */
    background: rgba(0, 0, 0, 0.32);
    border-radius: 4px;

    /* border */
    border: none;
  }

  div.field > label {
    /* display */
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 5px;

    /* width / height */
    width: 100%;

    /* font */
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
  }

  div.field > label > input {
    /* width / height */
    width: 100%;

    /* font */
    font-size: 16px;
    color: #FFFFFF;

    /* background */
    background: none;

    /* border */
    border: none;
  }

  div.field > label > input:focus {
    outline: none;
  }

  div.field > label > input::placeholder {
    /* font */
    color: rgba(255, 255, 255, 0.5);
  }

  .submit {
    /* width / height */
    width: 85px;
    height: 36px;

    /* font */
    color: #B22E6F;
    font-size: 16px;
    font-weight: 500;

    /* background */
    background: #FFFFFF;

    /* border */
    border: none;
    border-radius: 44px;
  }

  p.error {
    /* margin / padding */
    padding: 10px 10px;

    /* position */
    position: absolute;
    top: 60px;
    left: 0;

    /* background */
    background: #B48D98;
    border-radius: 4px;

    /* font */
    color: #FFFFFF;
    font-weight: 700;

    z-index: 1;
  }

  p.error:before {
    /* content */
    content: "";
    /* size */
    width: 0;
    height: 0;
    /* position */
    position: absolute;
    left: 10px;
    top: -20px;
    /* border */
    border: 10px solid;
    border-color: transparent transparent #B48D98 transparent;
  }

  @media screen and (min-width: 768px) {
  }
`