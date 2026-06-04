import { useState } from "react";
import "./styles.css"; // CSS 파일을 import

export default function TodoList() {
  const [input, setInput] = useState("");

  const changeInput = (str) => {
    setInput(str);
    console.log("[" + input + "]");
  };

  return (
    <div className="container">
      <h2>할 일 목록</h2>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => changeInput(e.target.value)}
        />
        <button>추가</button>
      </div>
    </div>
  );
}