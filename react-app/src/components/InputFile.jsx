import { useRef } from "react";

const InputFile = () => {
  const fileEl = useRef(null);

  const handleClick = () => {
    fileEl.current.click();
  };
  return (
    <>
      <button onClick={handleClick}>파일 업로드</button>
      <input ref={fileEl} type="file" style={{ display: "none" }} />
    </>
  );
};

export default InputFile;
