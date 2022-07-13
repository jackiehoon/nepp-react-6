const MyComponent = ({ name, message, children }) => {
  return (
    <>
      <h1>
        부모가 물려준 이름은 {name}입니다. {message}
      </h1>
      {children}
    </>
  );
};

export default MyComponent;
