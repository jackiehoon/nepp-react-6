import { useState, useEffect } from "react";

import { getMovies } from "../../apis";
import Form from "../templates/Movie/Form";
import List from "../templates/Movie/List";
import Pagination from "../organisms/Pagination";

// useEffect(() => {
//   // IIFE
//   (async (number) => {
//     const result = await getMovies();
//     console.log(result);
//   })(1);
// }, []);

const Movie = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [params, setParams] = useState({ query: "", country: "all" });

  const { query, country } = params;

  useEffect(() => {
    refreshList();
  }, [params, page]);

  const refreshList = async () => {
    if (!query) return;
    // page => start
    //  1 : 1
    //  2 : 11
    //  3 : 21
    //  10 : 91
    //  11 : 101
    //  20 : 191
    //  100 : 991
    const display = 10;
    const start = (page - 1) * display + 1;
    // const start = page * 10 - 1;
    const params = { query, start };
    if (country !== "all") {
      params.country = country;
    }
    const { items, total } = await getMovies(params);
    setItems(items);
    setTotal(total);
  };

  const handleChange = ({ name, value }) => {
    const newParams = { ...params, [name]: value };
    setParams(newParams);
    // 검색어와 나라필터가 바뀌면 1페이지로
    setPage(1);
  };

  return (
    <>
      <h1>영화 검색</h1>
      <Form data={params} onChange={handleChange} />
      <List data={items} />
      <Pagination
        nowPage={page}
        total={total}
        onChange={(page) => setPage(page)}
      />
    </>
  );
};

export default Movie;
