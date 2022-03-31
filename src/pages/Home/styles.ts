import Styled from "styled-components";
import Next from "../../assets/Next.svg";
import NextHover from "../../assets/Next-hover.svg";
import Prev from "../../assets/Prev.svg";
import PrevHover from "../../assets/Prev-hover.svg";
import HomeBackground from "../../assets/home-background.svg";

export const HomeContainer = Styled.div`
  /* width / height */
  min-height: 100vh;

  /* margin / padding */
  padding: 30px 0;

  /* background */
  background-image: url(${HomeBackground});
  background-size: cover;

  div.books-container {
    /* display */
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;

    /* width / height */
    max-width: 1220px;

    /* margin */
    margin: 15px auto;
  }

  div.paginator {
    /* display */
    display: flex;
    justify-content: center;
    column-gap: 15px;

    /* width/ height */
    width: 100%;
  }

  div.paginator > button {
    /* width / height */
    width: 32px;
    height: 32px;
    
    /* background / border */
    background: none;
    border: none;
  }
  
  div.paginator > :first-child {
    background-image: url(${Prev});
  }

  div.paginator > :first-child:hover {
    background-image: url(${PrevHover});
  }

  div.paginator > :last-child {
    background-image: url(${Next});
  }

  div.paginator > :last-child:hover {
    background-image: url(${NextHover});
  }

  div.paginator > p {
    margin-block: auto;
  }

  div.paginator > p > span {
    font-weight: 500;
  }

  @media screen and (min-width: 1200px) {
    div.paginator {
      justify-content: end;

      /* width / margin */
      max-width: 1200px;
      margin: 0 auto;
    }
  }
`