import { h } from "preact";
import { css } from "goober";

import { IcecreamViewer } from "./icecream-viewer.jsx";

export const Preview = ({ flavors, withCone }) => (
  <section class={itemStyle}>
    <h2>Preview</h2>
    <IcecreamViewer order={{ flavors, withCone }} />
  </section>
);

const itemStyle = css({
  backgroundColor: "#fff",
  padding: "16px",
});
