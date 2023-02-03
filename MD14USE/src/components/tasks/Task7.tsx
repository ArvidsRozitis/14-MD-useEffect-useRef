import { useRef } from "react";
import { Button } from "../buttons/button1";
import { TestBox } from "../boxes/TestBox";

export const Task7 = () => {
  const boxElementRef = useRef<HTMLElement>();
  const clonedElementsRef = useRef<HTMLDivElement[]>([]);

  const copyHandler = () => {
    if (boxElementRef.current) {
      const boxElement = boxElementRef.current
      const clone = boxElement.cloneNode(true)
      boxElement.parentNode?.appendChild(clone)
    }
  };

  return (
    <>
      <hr />
      <h2>Task 7</h2>
      <Button onClick={copyHandler} label={"clone element"} disabled={false} />
      <div className="box__wrapper">
        <div className="testBox" ref={boxElementRef}></div>
        
      
      </div>
    </>
  );
};

export default Task7;
