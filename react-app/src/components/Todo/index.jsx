import { useRef } from "react";
import { useState } from "react";
import styled from "styled-components";

import Form from "./Form";
import List from "./List";

const Todo = () => {
  // 리스트 관리
  const [todos, setTodos] = useState([]);
  const nextId = useRef(1);

  const handleAdd = (content) => {
    const todo = {
      id: nextId.current,
      content: content,
      checked: false,
    };
    const nextTodos = [...todos, todo];
    setTodos(nextTodos);
    nextId.current++;
  };

  const handleDelete = (deleteId) => {
    const nextTodo = todos.filter((todo) => todo.id !== deleteId);
    setTodos(nextTodo);
  };

  const handleChecked = (id) => {
    const nextTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.checked = !todo.checked;
      }
      return todo;
    });
    setTodos(nextTodo);
  };

  return (
    <Layout>
      <Container>
        <Title>일정관리</Title>
        <Form onAdd={handleAdd} />
        <List data={todos} onDelete={handleDelete} onChecked={handleChecked} />
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  background: #e9ecef;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 600px;
`;
const Title = styled.div`
  background: #22b8cf;
  color: #fff;
  font-size: 24px;
  text-align: center;
  padding: 10px;
`;

export default Todo;
