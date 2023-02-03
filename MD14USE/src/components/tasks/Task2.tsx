import { useState, useEffect } from "react";
import { Button } from "../buttons/button1";

export const Task2 = () => {
  const [count, setCount] = useState(0);
  const [buttonDisable, setButtonDisable] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setButtonDisable(false);
    }, 5000);
  }, []);

  const countHandler = () => {
    setCount(count + 1);
  };

  return (
    
    <div>
      <hr />
      <h2>Task 2</h2>
      <Button onClick={countHandler} label={count} disabled={buttonDisable} />
      <h3>{count * 2}</h3>
    </div>
  );
};

export default Task2
