import { h } from "preact";
import { useContext } from "preact/hooks";
import { css } from "goober";

import { LangContext } from "../context.js";
import { messages } from "../texts.js";

export const Footer = () => {
  const lang = useContext(LangContext);

  return <footer class={wrapStyle}>{messages[lang].bye}</footer>;
};

const wrapStyle = css`
  padding: 20px 25px;
  text-align: center;
  font-size: 0.8rem;
  color: #fff;
  background-color: #333;
`;
