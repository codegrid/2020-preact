import { h } from "preact";
import { css } from "goober";

export const Picker = ({ flavors, currentIdx, onPick }) => (
  <div class={pickerWrapStyle}>
    {flavors.map((f, idx) => (
      <div
        key={f}
        class={pickerStyle(idx === currentIdx)}
        style={{ backgroundColor: f }}
        onClick={() => onPick(idx)}
      ></div>
    ))}
  </div>
);

const pickerWrapStyle = css({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  margin: "32px auto",
});

const pickerStyle = (props) =>
  css({
    width: "80px",
    height: "80px",
    boxSizing: "border-box",
    border: props ? "4px dashed hotpink" : "none",
  });
