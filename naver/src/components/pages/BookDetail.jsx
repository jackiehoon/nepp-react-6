import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getBook } from "../../apis";

const BookDetail = () => {
  const [book, setBook] = useState({});
  const { isbn } = useParams();

  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = async () => {
    const { items } = await getBook({ d_isbn: isbn });
    setBook(items[0]);
  };

  const { image, title, author } = book;
  return (
    <>
      <img src={image} style={{ width: "100%" }} />
      <h1>{title}</h1>
      <h3>{author}</h3>
    </>
  );
};

export default BookDetail;
