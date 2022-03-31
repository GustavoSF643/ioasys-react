import styled from "styled-components";
import Close from "../../assets/close.svg";
import Quotes from "../../assets/Quotes.svg";

export const ModalContainer = styled.div`
  /* position */
  position: fixed;
  top: 0;

  /* width / height */
  height: 100vh;
  width: 100vw;

  /* background */
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);

  /* z-index */
  z-index: 1000;

  div.modal-content {
    /* display */
    display: flex;
    align-items: center;
    flex-direction: column;

    /* position */
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    /* width / height */
    max-width: 90vw;
    height: 100%;
    max-height: 80vh;

    /* margin / padding */
    margin: auto;
    padding: 30px;
  
    /* background / border */
    background: #ffffff;
    border-radius: 4px;

    overflow-y: auto;
  }

  button.close-modal {
    /* position */
    position: absolute;
    top: 15px;
    right: 15px;

    /* width / height */
    width: 32px;
    height: 32px;

    /* background */
    background: none;
    background-image: url(${Close});

    /* border */
    border: none;
  }

  div.book-image,
  div.book-image > img {
    /* width / height */
    width: 100%;
    max-width: 300px;
  }

  div.book-image {
    filter: drop-shadow(0px 11.9008px 17.8512px rgba(0, 0, 0, 0.3));
  }

  div.title-container,
  div.info-container {
    /* width */
    width: 100%;

    /* margin */
    margin: 20px 0;
  };

  div.book-info-container {
    width: 100%;
  }
  
  div.title-container > h4 {
    /* font */
    font-size: 28px;
    font-weight: 500;
    color: #333333;

    width: 100%;
  }

  div.title-container > p {
    /* font */
    font-size: 12px;
    color: #AB2680;
  }

  div.info-container > h4,
  div.publisher-review > h4 {
    /* font */
    font-size: 12px;
    color: #333333;
    
    margin: 10px 0;
  }

  div.info-row {
    /* display */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  div.info-row > h5 {
    /* font */
    font-size: 12px;
    font-weight: 500;
    color: #333333;
  }

  div.info-row > p,
  div.publisher-review > p {
    /* font */
    font-size: 12px;
    color: #999999;
    line-height: 20px;
  }

  div.publisher-review > p:before {
    content: url(${Quotes});
    margin-right: 5px;
  }

  @media screen and (min-width: 900px) {
    
    div.modal-content {
      flex-direction: row;
      justify-content: center;
      max-width: 900px;
      max-height: 608px;
      padding: 50px;
    }

    div.book-info-container {
      /* display */
      display: flex;
      flex-direction: column;

      /* height */
      height: 100%;
    }

    div.book-image {
      /* display */
      display: flex;
      align-items: center;

      /* height / margin */
      height: 100%;
      max-width: none;
    }

    div.book-image > img {
      /* width / height */
      width: initial;
      max-width: none;
      height: 100%;
    }

    div.title-container {
      margin: 0;
    }
  }
`