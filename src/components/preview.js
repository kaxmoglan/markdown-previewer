import React from "react";
import marked from "marked";

const Preview = (props) => {
  marked.setOptions({
    pedantic: false,
    gfm: true,
    breaks: true,
    sanitize: true,
    smartLists: true,
    smartypants: false,
    xhtml: false,
  });

  const markdown = marked(props.inputText);

  return (
    <div className="preview-section">
      <div className="title-bar">
        <i className="fas fa-code"></i>
        <p>Preview</p>
        <i className="fas fa-arrows-alt"></i>
      </div>
      <div id="preview" dangerouslySetInnerHTML={{ __html: markdown }} />
    </div>
  );
};

export default Preview;
