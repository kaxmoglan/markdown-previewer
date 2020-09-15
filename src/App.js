import React, { useState } from "react";
import "./App.css";

// Components
import Editor from "./components/editor";
import Preview from "./components/preview";

function App() {
  // STATES
  const [inputText, setInputText] = useState("");

  return (
    <>
      <h1 id="title">
        <i className="fas fa-code"></i> Markdown Previewer
      </h1>
      <Editor setInputText={setInputText} />
      <Preview inputText={inputText} />
    </>
  );
}

export default App;
