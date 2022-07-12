const InlineStyle = () => {
  const name = "리액트";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };
  return (
    <div style={style} className="react">
      {name}
    </div>
  );
};

export default InlineStyle;
