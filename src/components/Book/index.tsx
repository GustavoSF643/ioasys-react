import { IBook } from "../../types/books";
import { BookContainer } from "./styles";
import ImageNotFound from "../../assets/image-not-found.svg";
import { useState } from "react";
import BookModal from "../BookModal";

interface BookProps {
  book: IBook;
}

const Book = ({ book }: BookProps) => {
  const [modalOpened, setModalOpened] = useState(false);

  const openModal = () => {
    document.body.style.overflow = "hidden";
    setModalOpened(true);
  }

  const closeModal = () => {
    document.body.style.overflow = "auto";
    setModalOpened(false);
  }
  return (
    <>
      <BookContainer onClick={openModal}>
        <div className="book-image-container">
          {book.imageUrl
            ? <img
              src={book.imageUrl}
              alt={book.title}
            />
            : <img
              src={ImageNotFound}
              alt="not found"
            />
          }
        </div>
        <div className="book-info-container">
          <div>
            <h4>{book.title}</h4>
            {book.authors.map((author, index) => {
              return <p key={index}>{author}</p>;
            })}
          </div>
          <div>
            <p>{book.pageCount} páginas</p>
            <p>{book.publisher}</p>
            <p>Publicado em {book.published}</p>
          </div>
        </div>
      </BookContainer>
      {modalOpened
        && <BookModal book={book} closeModal={closeModal} />
      }
    </>
  )
}

export default Book;