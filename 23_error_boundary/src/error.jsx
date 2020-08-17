import { h } from "preact";
import { useState, useErrorBoundary } from "preact/hooks";

const Error = ({ fake }) => <p>{fake.undef}</p>;

export const GoodError = () => {
  const [count, setCount] = useState(0);
  const [mountError, setMountError] = useState(false);
  const [error] = useErrorBoundary();

  if (error)
    return (
      <div>
        <p>{error.message}</p>
      </div>
    );

  return (
    <div>
      {mountError && <Error />}
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
      <button onClick={() => setMountError(true)}>error!</button>
    </div>
  );
};

export const BadError = () => {
  const [count, setCount] = useState(0);
  const [mountError, setMountError] = useState(false);

  return (
    <div>
      {mountError && <Error />}
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
      <button onClick={() => setMountError(true)}>error!</button>
    </div>
  );
};
