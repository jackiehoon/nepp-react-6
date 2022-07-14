import { useState } from "react";

const EventPractice = () => {
  //   const [username, setUsername] = useState("");
  //   const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    username: "",
    username2: "",
    message: "",
  });
  const { username, username2, message } = form;

  const handleClick = () => {
    alert(username + message);
    setForm({
      username: "",
      username2: "",
      message: "",
    });
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nextForm = {
      ...form,
      [name]: value,
    };
    setForm(nextForm);
  };

  return (
    <>
      <h1>이벤트 연습</h1>
      <input name="username" onChange={handleChange} value={username} />
      <input name="username2" onChange={handleChange} value={username2} />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        onChange={handleChange}
        value={message}
        onKeyUp={handleKeyUp}
      />
      <button onClick={handleClick}>확인</button>
    </>
  );
};

export default EventPractice;
