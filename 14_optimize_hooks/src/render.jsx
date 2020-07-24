import { h } from "preact";
import { useState, useMemo } from "preact/hooks";

function heavyOperationWithA(a) {
  waitSync(500);
  return a + "!";
}

export const GoodRender = () => {
  const [stateA, setStateA] = useState("A");
  const [stateB, setStateB] = useState("B");

  const computedA = useMemo(() => heavyOperationWithA(stateA), [stateA]);

  return (
    <div>
      <p>a: {stateA}</p>
      <p>b: {stateB}</p>
      <p> computedA: {computedA} </p>
      <button onClick={() => setStateA((a) => a + "A")}>updateA</button>
      <button onClick={() => setStateB((b) => b + "B")}>updateB</button>
    </div>
  );
};

export const BadRender = () => {
  const [stateA, setStateA] = useState("A");
  const [stateB, setStateB] = useState("B");

  const computedA = heavyOperationWithA(stateA);

  return (
    <div>
      <p>a: {stateA}</p>
      <p>b: {stateB}</p>
      <p> computedA: {computedA} </p>
      <button onClick={() => setStateA((a) => a + "A")}>updateA</button>
      <button onClick={() => setStateB((b) => b + "B")}>updateB</button>
    </div>
  );
};
