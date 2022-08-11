import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/pages/Main";
import Movie from "./components/pages/Movie";
import Book from "./components/pages/Book";
import BookDetail from "./components/pages/BookDetail";

import Header from "./components/organisms/Header";

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        {/* 중첩라우팅 */}
        <Route element={<Header />}>
          {/* 자식라우트 */}
          <Route path="/movie" element={<Movie />} />
          <Route path="/book" element={<Book />} />
          <Route path="/book/:isbn" element={<BookDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
