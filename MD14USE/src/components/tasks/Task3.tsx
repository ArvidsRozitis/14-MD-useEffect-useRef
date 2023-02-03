import { useState } from "react";
import { Button } from "../buttons/button1";

type ColorsProps = string[];

export const Task3 = () => {
  const [colors, setColors] = useState<string[]>([]);
  const [input, setInput] = useState("#e66465");

  const addClickHandler = () => {
    const colorsCopy = [...colors];
    setColors([...colorsCopy, input]);
  };

  return (
    <div>
      <hr />
      <h2>Task 3</h2>
      <div>
        <label className="color__picker">
          <Button onClick={addClickHandler} label={"+"} disabled={false} />
          <input
            type="color"
            value="#e66465"
            onChange={(e) => {
              e.preventDefault();
              setInput(e.target.value);
              console.log(input);
            }}
          />
          backgroundColor
        </label>
        <CreateBoxes colors={colors} />
      </div>
    </div>
  );
};

export default Task3;

const CreateBoxes = ({ colors }: any) => {
  return (
    <div>
      {colors.map((color: string, index: number) => (
        <div
          key={index}
          className="testBox"
          style={{ backgroundColor: String(colors[index]) }}
        ></div>
      ))}
    </div>
  );
};
