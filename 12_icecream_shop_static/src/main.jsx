import { h, render } from "preact";
import { glob } from "goober";
import { App } from "./component/app.jsx";

glob`
html {
  font-family: sans-serif;
  font-size: 20px;
  background-size: auto auto;
  background-color: #fee;
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 8px,
    rgba(255, 255, 255, 1) 8px,
    rgba(255, 255, 255, 1) 16px
  );
  background-attachment: fixed;
  color: #444;
}

html,
body {
  margin: 0;
}

h1, h2 {
  margin: 0 auto 16px;
}
`;

render(<App />, document.body);
