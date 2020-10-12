import { h } from "preact";
import { useState, useErrorBoundary } from "preact/hooks";

const Err = ({ fake }) => <p>{fake.undef}</p>;

export const GoodError = () => {
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
      <button onClick={() => setMountErr(true)}>Good error!</button>
    </div>
  );
};

export const BadError = () => {
  const [mountErr, setMountErr] = useState(false);

  return (
    <div>
      {mountErr && <Err />}
      <button onClick={() => setMountErr(true)}>Bad error!</button>
    </div>
  );
};
