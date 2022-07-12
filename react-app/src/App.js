import Jsx from "./components/Jsx";
import InlineStyle from "./components/InlineStyle";
import MyComponent from "./components/MyComponent";

function App() {
  const name1 = "리액트";
  return (
    <>
      <MyComponent name={name1} message="반가워요" />
      <MyComponent name={"뷰"} message="감사합니다" />
      <MyComponent name={"앵귤러"}>
        <h1>h1이에요</h1>
        <h5>h5이에요</h5>
      </MyComponent>
    </>
  );
}

export default App;
