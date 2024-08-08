import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  return (
    <>
      <h1>{sessionStorage.getItem("text")}</h1>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          sessionStorage.setItem("text", text);
        }}
      >
        SUBMIT
      </button>
    </>
  );
}

export default App;
