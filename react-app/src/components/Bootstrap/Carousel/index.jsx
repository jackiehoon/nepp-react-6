import { useRef, useEffect, useState } from "react";
import styled from "styled-components";

import FadeInImages from "./FadeInImages";
import SlideImages from "./SlideImages";

const Carousel1 = ({ data, type }) => {
  const [index, setIndex] = useState(0);
  const isLoading = useRef(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleIndex(index + 1);
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [index]);

  useEffect(() => {
    isLoading.current = true;
    setTimeout(() => {
      isLoading.current = false;
    }, 500);
  }, [index]);

  const handleIndex = (i) => {
    if (isLoading.current) return;

    const lastIndex = data.length - 1;
    let nextIndex = i;
    if (i < 0) nextIndex = lastIndex;
    if (i > lastIndex) nextIndex = 0;

    setIndex(nextIndex);
  };

  const Images = {
    "fade-in": <FadeInImages data={data} index={index} />,
    slide: <SlideImages data={data} index={index} />,
  };

  return (
    <Container>
      {Images[type]}
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
  overflow: hidden;
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
