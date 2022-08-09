import { useEffect } from "react";
import { useState } from "react";

import { getBooks } from "../../apis";
import Form from "../templates/Book/Form";
import List from "../templates/Book/List";

const Book = () => {
  const [params, setParams] = useState({ query: "" });
  const [items, setItems] = useState([]);

  useEffect(() => {
    refreshList();
  }, [params]);

  const refreshList = async () => {
    if (!params.query) return;

    const result = await getBooks(params);
    setItems(result.items);
  };

  const handleChange = ({ name, value }) => {
    const newParams = { ...params, [name]: value };
    setParams(newParams);
  };

  return (
    <>
      <h1>책 검색</h1>
      <Form onChange={handleChange} />
      <List data={items} />
    </>
  );
};

export default Book;
