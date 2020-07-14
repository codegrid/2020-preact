import { h } from "preact";

export const Paragraph = ({ children, bold = false }) => (
  <p class={`paragraph ${bold ? "-bold" : ""}`}>{children}</p>
);
