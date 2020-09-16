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

  const handleMax = () => {
    props.setPreviewMaximise(!props.previewMaximise);
    props.setSplitView(false);
  };

  return (
    <div
      className={`preview-section windowMaximise_${props.previewMaximise} splitview_${props.splitView}`}
    >
      <div className="title-bar">
        <i className="fas fa-code"></i>
        <p>Preview</p>
        <div className="buttons">
          <i onClick={props.handleSplitView} className="fas fa-columns"></i>
          <i onClick={handleMax} className="fas fa-arrows-alt"></i>
        </div>
      </div>
      <div id="preview" dangerouslySetInnerHTML={{ __html: markdown }} />
    </div>
  );
};

export default Preview;
