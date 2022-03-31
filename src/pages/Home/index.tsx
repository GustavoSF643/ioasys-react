import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../providers/Auth";
import Header from "../../components/Header";
import { HomeContainer } from "./styles";
import { IBook } from "../../types/books";
import api from "../../services/api";
import { AxiosRequestConfig } from "axios";
import Book from "../../components/Book";

const Home = () => {
  const [books, setBooks] = useState<IBook[]>();
  const [page, setPage] = useState<number>(1);
  const { auth } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (page) {
      const requestConfig: AxiosRequestConfig = {
        url: `books?page=${page}`,
        method: "GET",
      };
      api.request(requestConfig)
        .then((res) => setBooks(res.data.data))
        .catch(() => console.error("Error getting books."))
    }
  }, [page])

  if (!auth.isAuthenticated()) {
    return <Navigate to="/sign-in" state={location} />;
  }

  return (
    <HomeContainer>
      <Header />
      <div className="books-container">
        {books && books.map((book) => {
          return <Book book={book} key={book.id} />
        })}
      </div>
    </HomeContainer>
  )
}

export default Home;