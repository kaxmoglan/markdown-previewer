import React, { useState } from "react";
import "./App.css";

// Components
import Editor from "./components/editor";
import Preview from "./components/preview";

function App() {
  // STATES
  const [inputText, setInputText] = useState(placeholder);
  const [editMaximise, setEditMaximise] = useState(false);
  const [previewMaximise, setPreviewMaximise] = useState(false);
  const [splitView, setSplitView] = useState(false);

  // HANDLE SPLIT VIEW
  const handleSplitView = () => {
    setEditMaximise(false);
    setPreviewMaximise(false);
    setSplitView(!splitView);
  };

  return (
    <>
      <h1 id="title">
        <i className="fas fa-code"></i> Markdown Previewer
      </h1>
      <Editor
        inputText={inputText}
        setInputText={setInputText}
        editMaximise={editMaximise}
        setEditMaximise={setEditMaximise}
        splitView={splitView}
        setSplitView={setSplitView}
        handleSplitView={handleSplitView}
      />
      <Preview
        inputText={inputText}
        previewMaximise={previewMaximise}
        setPreviewMaximise={setPreviewMaximise}
        splitView={splitView}
        setSplitView={setSplitView}
        handleSplitView={handleSplitView}
      />
    </>
  );
}

export default App;

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;
