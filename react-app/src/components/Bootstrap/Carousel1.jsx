import { useState } from "react";
import styled from "styled-components";

const Carousel1 = ({ data }) => {
  const [index, setIndex] = useState(0);

  const handleIndex = (i) => {
    const lastIndex = data.length - 1;
    let nextIndex = i;
    if (i < 0) nextIndex = lastIndex;
    if (i > lastIndex) nextIndex = 0;

    setIndex(nextIndex);
  };

  return (
    <Container>
      <Images>
        {data.map(({ id, image }, i) => (
          <Image key={id} src={image} active={index === i} />
        ))}
      </Images>
      <BtnLeft onClick={() => handleIndex(index - 1)}>이전</BtnLeft>
      <BtnRight onClick={() => handleIndex(index + 1)}>다음</BtnRight>
      <Pages>
        {data.map(({ id }, i) => (
          <BtnPage key={id} onClick={() => handleIndex(i)} active={index === i}>
            {i + 1}
          </BtnPage>
        ))}
      </Pages>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 600px;
  height: 400px;
`;
const Images = styled.div`
  height: 100%;
`;
const Image = styled.img`
  transition: opacity 0.5s;
  opacity: ${({ active }) => !active && 0};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Btn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
const BtnLeft = styled(Btn)`
  left: 20px;
`;
const BtnRight = styled(Btn)`
  right: 20px;
`;

const Pages = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;
const BtnPage = styled.button`
  background: ${({ active }) => active && "red"};
`;

export default Carousel1;
