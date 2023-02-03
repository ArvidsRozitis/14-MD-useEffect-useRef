import { useRef } from "react";
import { Button } from "../buttons/button1";

export const Task6 = () => {
  const box = useRef<any>();

  const colorHandler = () => {
    getRandomColor();
    box.current.style.backgroundColor = getRandomColor();
  };
  return (
    <>
      <hr />
      <h2>Task 6</h2>
      <Button onClick={colorHandler} label={"change color"} disabled={false} />
      <div className="box__wrapper">
        <div ref={box} className="testBox"></div>
      </div>
    </>
  );
};

export default Task6;

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
