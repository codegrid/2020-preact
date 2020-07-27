import { h, render } from "preact";

import { GoodUpdate, BadUpdate } from "./update.jsx";

render(
  <div>
    <GoodUpdate />
    <hr />
    <BadUpdate />
  </div>,
  document.body
);
