import { useState } from "react";
export const InputTest2 = () => {
  const [input, setInput] = useState("");
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          e.preventDefault();
          setInput(e.target.value);
          console.log("input change");
        }}
      />
      {input ? <h3>{input}</h3> : <h3>{"..."}</h3>}
    </>
  );
};

export default InputTest2;
