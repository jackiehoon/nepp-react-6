import { useState, useRef } from "react";

const IterationSample = ({ name }) => {
  const [text, setText] = useState("");
  const [names, setNames] = useState([
    { id: 1, text: "얼음" },
    { id: 2, text: "눈" },
    { id: 3, text: "바람" },
    { id: 4, text: "구름" },
  ]);
  // const [nextId, setNextId] = useState(5);
  const nextId = useRef(5);

  const handleClick = () => {
    if (!text) return;

    const nextNames = [...names, { id: nextId.current, text }];
    setNames(nextNames);
    setText("");
    // nextId.current = nextId.current + 1;
    // nextId.current += 1;
    nextId.current++;
  };

  const handleDelete = (deleteId) => {
    const nextNames = names.filter((e, i) => {
      return deleteId !== e.id;
    });
    setNames(nextNames);
  };

  return (
    <>
      <div>
        <input onChange={(e) => setText(e.target.value)} value={text} />
        <button onClick={handleClick}>추가</button>
      </div>
      <ul>
        {names.map(({ id, text }, index) => (
          <li key={id} onDoubleClick={() => handleDelete(id)}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default IterationSample;
