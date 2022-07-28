import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

import { getMovies } from "../../apis";

// useEffect(() => {
//     // IIFE
//     (async () => {
//       const result = await getMovies();
//       console.log(result);
//     })();
//   }, []);

const Movie = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    refreshList();
  }, []);

  const refreshList = async () => {
    const result = await getMovies();
    setItems(result.items);
  };

  return (
    <>
      <h1>영화 검색</h1>
      <Form>
        <Input />
        <BtnSearch>검색</BtnSearch>
      </Form>
      <List>
        {items.map(({ link, image, title }) => (
          <Item key={link}>
            <Thumbnail src={image} />
            <a href={link} target="_blank" rel="noreferrer">
              <Name>{title}</Name>
            </a>
          </Item>
        ))}
      </List>
    </>
  );
};

const Form = styled.form`
  margin: 20px;
  display: flex;
`;
const Input = styled.input`
  flex: 1;
  margin-right: 10px;
`;
const BtnSearch = styled.button``;
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
const Name = styled.h4``;

export default Movie;
