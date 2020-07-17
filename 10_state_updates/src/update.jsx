import { h } from "preact";
import { useState } from "preact/hooks";

export const BadUpdate = () => {
  const [items, setItems] = useState([1, 2, 3]);

  return (
    <button
      onClick={() => {
        items.push(items.length + 1);
        setItems(items);
      }}
    >
      Bad: {JSON.stringify(items)}
    </button>
  );
};

export const GoodUpdate = () => {
  const [items, setItems] = useState([1, 2, 3]);

  return (
    <button onClick={() => setItems([...items, items.length + 1])}>
      Good: {JSON.stringify(items)}
    </button>
  );
};
