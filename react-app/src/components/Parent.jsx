import { useState } from "react";
import Info from "./Info";

const Parent = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>toggle</button>
      {show && <Info />}
    </>
  );
};

export default Parent;
