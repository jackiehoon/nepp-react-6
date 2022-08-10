import styled, { css } from "styled-components";

const Pagination = ({ nowPage, total, onChange }) => {
  const display = 10;
  // total : last = 나눗셈, 올림
  // 1 : 1
  // 27 : 3
  // 51 : 6
  // 99 : 10
  // 100 : 10

  // 5개씩
  // nowPage : start = 나누기, 올림, 곱하기, 빼기
  // 1 : 1
  // 5 : 1
  // 6 : 6
  // 10 :6
  // 100 : 96

  // 10
  // 1 : 1
  // 9 : 1
  // 10 : 1
  //   11 : 11
  // 20 : 11
  //   21 : 21
  //   91 : 91
  //   100: 91
  //   101 :101

  const last = Math.ceil(total / display);
  const btnLength = 5;
  const start = Math.ceil(nowPage / btnLength) * btnLength - (btnLength - 1);
  const end = start + btnLength - 1 > last ? last : start + btnLength - 1;

  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <Container>
      {nowPage > 1 && (
        <BtnPage onClick={() => onChange(nowPage - 1)}>{"<"}</BtnPage>
      )}
      {pages.map((page) => (
        <BtnPage active={page === nowPage} onClick={() => onChange(page)}>
          {page}
        </BtnPage>
      ))}
      {nowPage < last && (
        <BtnPage onClick={() => onChange(nowPage + 1)}>{">"}</BtnPage>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;
const BtnPage = styled.button`
  background: #ecf1ff;
  color: #3f6bcc;
  border: none;
  width: 30px;
  height: 25px;
  border-radius: 4px;
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      background: #3f6bcc;
      color: #ecf1ff;
    `}
  & + & {
    margin-left: 5px;
  }
`;

export default Pagination;
