import axios from "axios";
import { useState } from "react";

const Axios = () => {
  const [data, setData] = useState(null);

  const onClick = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/todos/1";
      const response = await axios.get(url);
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
    // axios
    //     .get("https://jsonplaceholder.typicode.com/todos/1")
    //     .then((response) => {
    //       console.log(response);
    //       setData(response.data);
    //     });
  };

  return (
    <>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </>
  );
};

export default Axios;
