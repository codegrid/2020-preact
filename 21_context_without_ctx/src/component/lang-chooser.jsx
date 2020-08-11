import { h } from "preact";
import { css } from "goober";

export const LangChooser = ({ languages, lang, onChoose }) => {
  return (
    <aside class={wrapStyle}>
      {languages.map((l) => (
        <label key={l}>
          <input
            type="radio"
            name="lang"
            value={l}
            checked={lang === l}
            onClick={() => onChoose(l)}
          />{" "}
          {l}
        </label>
      ))}
    </aside>
  );
};

const wrapStyle = css`
  border: 3px ridge blue;
  text-align: center;
  padding: 5px;
`;
