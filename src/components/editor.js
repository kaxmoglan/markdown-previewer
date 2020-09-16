import React from "react";

const Editor = (props) => {
  // HANDLERS
  const handleInput = (e) => {
    props.setInputText(e.target.value);
  };

  const handleMax = () => {
    props.setEditMaximise(!props.editMaximise);
    props.setSplitView(false);
  };

  return (
    <div
      className={`editor-section windowMaximise_${props.editMaximise} splitview_${props.splitView}`}
    >
      <div className="title-bar">
        <i className="fas fa-code"></i>
        <p>Editor</p>
        <div className="buttons">
          <i className="fas fa-columns" onClick={props.handleSplitView}></i>
          <i className="fas fa-arrows-alt" onClick={handleMax}></i>
        </div>
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
