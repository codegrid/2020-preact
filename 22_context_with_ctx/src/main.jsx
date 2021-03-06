import { h, render } from "preact";
import { useState } from "preact/hooks";
import { glob } from "goober";

import { LangContext } from "./context.js";
import { languages } from "./texts.js";
import { LangChooser } from "./component/lang-chooser.jsx";
import { Layout } from "./component/layout.jsx";

glob`
  body { margin: 0; }
`;

const App = () => {
  const [lang, setLang] = useState(languages[0]);

  return (
    <div>
      <LangChooser lang={lang} languages={languages} onChoose={setLang} />
      <LangContext.Provider value={lang}>
        <Layout />
      </LangContext.Provider>
    </div>
  );
};

render(<App />, document.body);
