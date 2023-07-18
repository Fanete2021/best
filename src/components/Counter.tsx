import React, {useState} from 'react';
import styles from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div className={styles.btn}>
      <button onClick={increment}>increment</button>
      <h1>{count}</h1>
    </div>
  );
};
