import { useState, useEffect, useRef } from "react";
import { Button } from "../buttons/button1";
import { InputTest2 } from "../inputs/InputTest2";

export const Task5 = () => {
  useEffect(() => {
    setCount(100)
  }, []);
  const fontRef = useRef<number>(16);
  const [count, setCount] = useState(0);
  const countHandler = () => {
    setCount(count + 1);
    fontRef.current = fontRef.current +1 
  };

  return (
    <div>
      <hr />
      <h2>Task 5</h2>
      <div>
        <Button onClick={countHandler} label={"+"} disabled={false} />
        <h3 style={{fontSize: fontRef.current}}>count: {count}</h3>
        <InputTest2 />
      </div>
    </div>
  );
};

export default Task5;
