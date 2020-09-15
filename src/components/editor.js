import React from "react";

const Editor = (props) => {
  // HANDLERS
  const handleInput = (e) => {
    props.setInputText(e.target.value);
  };

  return (
    <div className="editor-section">
      <div className="title-bar">
        <i className="fas fa-code"></i>
        <p>Editor</p>
        <i className="fas fa-arrows-alt"></i>
      </div>
      <textarea onChange={handleInput} name="editor" id="editor"></textarea>
    </div>
  );
};

export default Editor;
