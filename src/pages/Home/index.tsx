import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../providers/Auth";
import Header from "../../components/Header";
import { HomeContainer } from "./styles";
import { IBook } from "../../types/books";
import api from "../../services/api";
import { AxiosRequestConfig } from "axios";
import Book from "../../components/Book";

const Home = () => {
  const [books, setBooks] = useState<IBook[]>();
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { auth } = useAuth();
  const location = useLocation();
  const { page } = useParams();
  const navigate = useNavigate();

  const getBooks = (page: string | number) => {
    const requestConfig: AxiosRequestConfig = {
      url: `books?page=${page}&amount=12`,
      method: "GET",
    };
    api.request(requestConfig)
      .then((res) => {
        const page = res.data.page;
        const totalPages = Math.ceil(res.data.totalPages);
        setBooks(res.data.data);
        setCurrentPage(page);
        setTotalPages(totalPages);
      })
      .catch(() => console.error("Error getting books."));
  }

  useEffect(() => {
    if (page) {
      getBooks(page);
    } else {
      getBooks(currentPage);
    }
  }, [page])

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
      getBooks(totalPages);
    }
  }, [currentPage])

  if (!auth.isAuthenticated()) {
    return <Navigate to="/sign-in" state={location} />;
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      navigate(`/${currentPage + 1}`);
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      navigate(`/${currentPage - 1}`);
    }
  }

  return (
    <HomeContainer>
      <Header />
      <div className="books-container">
        {books && books.map((book) => {
          return <Book book={book} key={book.id} />
        })}
      </div>
      <div className="paginator">
        <button onClick={handlePrevPage} />
        <p>
          Página <span>
            {currentPage}
          </span> de <span>
            {totalPages}
          </span>
        </p>
        <button onClick={handleNextPage} />
      </div>
    </HomeContainer>
  )
}

export default Home;