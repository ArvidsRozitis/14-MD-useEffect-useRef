import { useRef } from "react";
import { Button } from "../buttons/button1";
import { TestBox } from "../boxes/TestBox";

export const Task8 = () => {
  const boxMove = useRef<any>(true);

  const moveHandler = () => {
    if (boxMove.current.style.justifyContent === "right") {
      boxMove.current.style.justifyContent = "left";
    } else {
      boxMove.current.style.justifyContent = "right";
    }
  };

  return (
    <>
      <hr />
      <h2>Task 8</h2>
      <Button onClick={moveHandler} label={"move"} disabled={false} />
      <div ref={boxMove} className="box__wrapper">
        <TestBox />
      </div>
    </>
  );
};

export default Task8;
