const useState = (init) => {
  let state = init;

  const setState = (_state) => {
    state = _state;
    // 렌더링 작업
  };

  return [state, setState];
};

const Component = () => {
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    setNumber(number + 1);
  };

  return (
    <>
      {number}
      <button onClick={handleClick}>+</button>
    </>
  );
};
