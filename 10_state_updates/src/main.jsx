import { h, render } from "preact";
import { useState } from "preact/hooks";

import { GoodUpdate, BadUpdate } from "./update.jsx";

render(
  <div>
    <GoodUpdate />
    <hr />
    <BadUpdate />
  </div>,
  document.body
);
