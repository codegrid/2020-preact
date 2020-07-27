import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

export const GoodEffect = () => {
  const [stateA, setStateA] = useState("A");
  const [stateB, setStateB] = useState("B");
  useEffect(() => {
    console.log("good:", stateA);
  }, [stateA]);

  return (
    <div>
      <button onClick={() => setStateA((a) => `${a}!`)}>{stateA}</button>
      <button onClick={() => setStateB((b) => `${b}?`)}>{stateB}</button>
    </div>
  );
};

export const BadEffect = () => {
  const [stateA, setStateA] = useState("A");
  const [stateB, setStateB] = useState("B");
  useEffect(() => {
    console.log("bad:", stateA);
  });

  return (
    <div>
      <button onClick={() => setStateA((a) => `${a}!`)}>{stateA}</button>
      <button onClick={() => setStateB((b) => `${b}?`)}>{stateB}</button>
    </div>
  );
};
