import { h } from "preact";
import { css } from "goober";

import { messages } from "../texts.js";

export const Section1 = ({ lang }) => (
  <section class={wrapStyle}>{messages[lang].section1}</section>
);

export const Section2 = ({ lang }) => (
  <section class={wrapStyle}>{messages[lang].section2}</section>
);

export const Section3 = ({ lang }) => (
  <section class={wrapStyle}>{messages[lang].section3}</section>
);

const wrapStyle = css`
  padding: 20px;
  box-shadow: 1px 1px 2px #333;
  background-color: #fff;
`;
