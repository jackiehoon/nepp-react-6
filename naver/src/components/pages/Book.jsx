import { useEffect } from "react";
import { useState } from "react";

import { getBooks } from "../../apis";
import Pagination from "../organisms/Pagination";
import Form from "../templates/Book/Form";
import List from "../templates/Book/List";

const Book = () => {
  const [params, setParams] = useState({ query: "" });
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    refreshList();
  }, [params, page]);

  const refreshList = async () => {
    if (!params.query) return;

    const display = 10;
    const start = (page - 1) * display + 1;

    const { items, total } = await getBooks({ ...params, start });
    setItems(items);
    setTotal(total);
  };

  const handleChange = ({ name, value }) => {
    const newParams = { ...params, [name]: value };
    setParams(newParams);
    setPage(1);
  };

  return (
    <>
      <h1>책 검색</h1>
      <Form onChange={handleChange} />
      <List data={items} />
      <Pagination
        total={total}
        nowPage={page}
        onChange={(page) => setPage(page)}
      />
    </>
  );
};

export default Book;
