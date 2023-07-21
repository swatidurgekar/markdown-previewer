import "./App.css";
import { useState } from "react";
import Markdown from "react-markdown";

export default function App() {
  const [content, setContent] = useState(
    "# Welcome to my React Markdown Previewer\n## heading1\nthere's also [links](https://www.freecodecamp.org)\n\nHeres some code, `<div></div>` between 2 backticks.\n\n// this is multi-line code:\n```\nfunction x(){\nconsole.log('Hello');\n}\n```\n- and ofcourse there are lists\n\n> block \n\n ![drawing](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg )\n\nyou can also make text **bold**...whoa"
  );
  return (
    <div className="App">
      <textarea
        id="editor"
        value={content}
        onChange={({ target }) => setContent(target.value)}
      />
      <div className="preview" id="preview">
        <Markdown children={content} />
        &nbsp;
      </div>
    </div>
  );
}
