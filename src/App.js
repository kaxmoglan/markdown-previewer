import React, { useState } from "react";
import "./App.css";

// Components
import Editor from "./components/editor";
import Preview from "./components/preview";

function App() {
  // STATES
  const [inputText, setInputText] = useState("");
  const [editMaximise, setEditMaximise] = useState(false);
  const [previewMaximise, setPreviewMaximise] = useState(false);

  return (
    <>
      <h1 id="title">
        <i className="fas fa-code"></i> Markdown Previewer
      </h1>
      <Editor
        setInputText={setInputText}
        editMaximise={editMaximise}
        setEditMaximise={setEditMaximise}
      />
      <Preview
        inputText={inputText}
        previewMaximise={previewMaximise}
        setPreviewMaximise={setPreviewMaximise}
      />
    </>
  );
}

export default App;
