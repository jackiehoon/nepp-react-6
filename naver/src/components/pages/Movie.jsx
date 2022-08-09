import { useState, useEffect } from "react";

import { getMovies } from "../../apis";
import Form from "../templates/Movie/Form";
import List from "../templates/Movie/List";

// useEffect(() => {
//   // IIFE
//   (async (number) => {
//     const result = await getMovies();
//     console.log(result);
//   })(1);
// }, []);

const Movie = () => {
  const [items, setItems] = useState([]);
  const [params, setParams] = useState({ query: "", country: "all" });

  const { query, country } = params;

  useEffect(() => {
    refreshList();
  }, [params]);

  const refreshList = async () => {
    if (!query) return;

    const params = { query };
    if (country !== "all") {
      params.country = country;
    }
    const result = await getMovies(params);
    setItems(result.items);
  };

  const handleChange = ({ name, value }) => {
    const newParams = { ...params, [name]: value };
    setParams(newParams);
  };

  return (
    <>
      <h1>영화 검색</h1>
      <Form data={params} onChange={handleChange} />
      <List data={items} />
    </>
  );
};

export default Movie;
