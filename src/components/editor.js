import React from "react";

const Editor = (props) => {
  // HANDLERS
  const handleInput = (e) => {
    props.setInputText(e.target.value);
  };

  const handleMax = () => {
    props.setEditMaximise(!props.editMaximise);
  };

  return (
    <div className={`editor-section windowMaximise_${props.editMaximise}`}>
      <div className="title-bar">
        <i className="fas fa-code"></i>
        <p>Editor</p>
        <i className="fas fa-arrows-alt" onClick={handleMax}></i>
      </div>
      <textarea
        onChange={handleInput}
        name="editor"
        id="editor"
        value={props.inputText}
      ></textarea>
    </div>
  );
};

export default Editor;
