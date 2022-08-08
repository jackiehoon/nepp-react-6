import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

import { getMovies } from "../../apis";
import Form from "../templates/Movie/Form";

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
      <List>
        {items.map(({ link, image, title }) => (
          <Item key={link}>
            <Thumbnail src={image} />
            <a href={link} target="_blank" rel="noreferrer">
              <Name dangerouslySetInnerHTML={{ __html: title }} />
            </a>
          </Item>
        ))}
      </List>
    </>
  );
};

const List = styled.div`
  margin: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;
const Item = styled.div``;
const Thumbnail = styled.img`
  width: 100%;
`;
const Name = styled.p``;

export default Movie;
