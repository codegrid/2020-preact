import { h } from "preact";
import { useState, useErrorBoundary } from "preact/hooks";

const Err = ({ fake }) => <p>{fake.undef}</p>;

export const GoodError = () => {
  const [count, setCount] = useState(0);
  const [mountErr, setMountErr] = useState(false);
  const [error] = useErrorBoundary();

  if (error)
    return (
      <div>
        <p>{error.message}</p>
      </div>
    );

  return (
    <div>
      {mountErr && <Err />}
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
      <button onClick={() => setMountErr(true)}>error!</button>
    </div>
  );
};

export const BadError = () => {
  const [count, setCount] = useState(0);
  const [mountErr, setMountErr] = useState(false);

  return (
    <div>
      {mountErr && <Err />}
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
      <button onClick={() => setMountErr(true)}>error!</button>
    </div>
  );
};
