import { useState, useEffect } from "react";
import { Button } from "../buttons/button1";
import { InputTest2 } from "../inputs/InputTest2";

export const Task4 = () => {
  const [count, setCount] = useState(0);
  const countHandler = () => {
    setCount(count + 1);
    console.log("Changing count");
  };
  useEffect(() => {
    console.log("First Render");
  }, []);
  console.log("Render");

  return (
    <div>
      <hr />
      <h2>Task 4</h2>
      <div>
        <Button onClick={countHandler} label={"+"} disabled={false} />
        <h3>count: {count}</h3>
        <InputTest2 />
      </div>
    </div>
  );
};

export default Task4;
