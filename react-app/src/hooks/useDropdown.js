import { useState, useEffect } from "react";

const useDropdown = (element) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onClick = (e) => {
      if (element.current.contains(e.target)) return;

      setShow(false);
    };

    document.body.addEventListener("click", onClick);
    return () => {
      document.body.removeEventListener("click", onClick);
    };
  }, []);

  return [show, setShow];
};

export default useDropdown;
