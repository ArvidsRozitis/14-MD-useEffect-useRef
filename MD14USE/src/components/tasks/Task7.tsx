import { useRef } from "react";
import { Button } from "../buttons/button1";
import { TestBox } from "../boxes/TestBox";

export const Task7 = () => {
  const wrapper = useRef<any>();

  const copyHandler = () => {
    wrapper.current.createElement(<TestBox />);
  };
  return (
    <>
      <hr />
      <h2>Task 7</h2>
      <Button onClick={copyHandler} label={"clone element"} disabled={false} />
      <div ref={wrapper} className="box__wrapper">
        <TestBox />
      </div>
    </>
  );
};

export default Task7;
