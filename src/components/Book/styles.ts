import styled from "styled-components";

export const BookContainer = styled.div`
  /* display */
  display: flex;
  align-items: center;
  column-gap: 15px;

  /* width / height */
  height: 160px;

  /* margin / padding */
  padding: 15px;

  /* background */
  background: #FFFFFF;

  /* border / box-shadow */
  border-radius: 4px;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);

  div.book-image-container {
    filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));
  }

  div.book-image-container,
  div.book-image-container > img {
    /* width / height */
    height: 100%;
  }

  div.book-info-container {
    /* display */
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    /* width / height */
    height: 100%;
  }

  div.book-info-container > :first-child > h4 {
    /* font */
    font-size: 14px;
    font-weight: 500;
  }

  div.book-info-container > :first-child > p,
  div.book-info-container > :last-child > p {
    /* font */
    font-size: 12px;
    font-weight: 400;
  }

  div.book-info-container > :first-child > p {
    /* font */
    color: #AB2680;
  }

  div.book-info-container > :last-child > p {
    /* font */
    color: #999999;
  }
`