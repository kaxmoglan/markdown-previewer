import React from "react";
import "./App.css";

function App() {
  const Editor = () => {
    return (
      <div className="editor-section">
        <div className="title-bar">
          <i className="fas fa-code"></i>
          <p>Editor</p>
          <i className="fas fa-arrows-alt"></i>
        </div>
        <textarea name="editor" id="editor" cols="30" rows="10"></textarea>
      </div>
    );
  };

  const Preview = () => {
    return (
      <div className="preview-section">
        <div className="title-bar">
          <i className="fas fa-code"></i>
          <p>Preview</p>
          <i className="fas fa-arrows-alt"></i>
        </div>
        <div id="preview"></div>
      </div>
    );
  };

  return (
    <>
      <Editor />
      <Preview />
    </>
  );
}

export default App;
