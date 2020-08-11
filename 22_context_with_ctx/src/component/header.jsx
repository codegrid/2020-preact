import { h } from "preact";
import { useContext } from "preact/hooks";
import { css } from "goober";

import { LangContext } from "../context.js";
import { messages } from "../texts.js";

export const Header = () => {
  const lang = useContext(LangContext);

  return (
    <header class={wrapStyle}>
      <h1>{messages[lang].hello}</h1>
    </header>
  );
};

const wrapStyle = css`
  height: 200px;
  padding: 50px 25px;
  text-align: center;
  color: #fff;
  background-color: indigo;
  font-size: 2rem;
`;
