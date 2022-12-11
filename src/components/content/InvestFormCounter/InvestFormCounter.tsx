import React, {useEffect} from 'react';
import styles from './InvestFormCounter.module.scss';

interface Props {
  className?: string;
  value: string | number;
  onChange(value: string | number): void;
}

const InvestFormCounter: React.FC<Props> = ({
  value,
  className = '',
  onChange,
}) => {
  const [count, setCount] = React.useState(+value);

  useEffect(()=>{
    onChange(count)
  },[count])

  const increase = () => {
    setCount((prevCount) => {
      if (prevCount >= 10) return 10
      return prevCount + 1
    });
  };

  const decrease = () =>
    setCount((prevCount) => {
      if (prevCount <= 1) return 1;
      return prevCount - 1;
    });

  return (
    <div className={`${styles.Counter} ${className}`}>
      <div className={styles.Counter_Increment} onClick={decrease}>
        <span>&minus;</span>
      </div>
      <div className={styles.Counter_Value}>
        <span>{count}</span>
      </div>
      <div className={styles.Counter_Decrement} onClick={increase}>
        <span>+</span>
      </div>
    </div>
  );
};
export default InvestFormCounter;
