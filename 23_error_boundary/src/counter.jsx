import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

const useAutoCounter = (duration = 1000) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      count < 100 ? setCount((c) => c + 1) : setCount(0);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, count]);

  return { count };
};

export const Counter = () => {
  const { count } = useAutoCounter(100);
  return <p>{count}</p>;
};
