import { h } from "preact";
import { css } from "goober";

import { messages } from "../texts.js";

export const Footer = ({ lang }) => (
  <footer class={wrapStyle}>{messages[lang].bye}</footer>
);

const wrapStyle = css`
  padding: 20px 25px;
  text-align: center;
  font-size: 0.8rem;
  color: #fff;
  background-color: #333;
`;
