import { IBook } from "../../types/books";
import { ModalContainer } from "./styles";

interface BookModalProps {
  book: IBook;
  closeModal: () => void;
}

const BookModal = ({ book, closeModal }: BookModalProps) => {
  return (
    <ModalContainer onClick={closeModal}>
      <button className="close-modal" onClick={closeModal}></button>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="book-image">
          <img src={book.imageUrl} alt={book.title} />
        </div>
        <div className="book-info-container">
          <div className="title-container">
            <h4>{book.title}</h4>
            <p>{book.authors.join(", ")}</p>
          </div>
          <div className="info-container">
            <h4>INFORMAÇÕES</h4>
            <div className="info-row">
              <h5>Páginas</h5><p>{book.pageCount} páginas</p>
            </div>
            <div className="info-row">
              <h5>Editora</h5><p>{book.publisher}</p>
            </div>
            <div className="info-row">
              <h5>Publicação</h5><p>{book.published}</p>
            </div>
            <div className="info-row">
              <h5>Idioma</h5><p>{book.language}</p>
            </div>
            <div className="info-row">
              <h5>Título Original</h5><p></p>
            </div>
            <div className="info-row">
              <h5>ISBN-10</h5><p>{book.isbn10}</p>
            </div>
            <div className="info-row">
              <h5>ISBN-13</h5><p>{book.isbn13}</p>
            </div>
          </div>
          <div className="publisher-review">
            <h4>RESENHA DA EDITORA</h4>
            <p>{book.description}</p>
          </div>
        </div>
      </div>
    </ModalContainer>
  )
}

export default BookModal;