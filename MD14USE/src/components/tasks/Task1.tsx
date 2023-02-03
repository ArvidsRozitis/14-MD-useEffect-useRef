import { useState, useEffect, useRef } from "react";

export const Task1 = () => {
  type ValuesArr = string[];
  const [values, setValues] = useState<ValuesArr>([]);
  const [input, setInput] = useState("");

  const inputRef = useRef<any>();

  useEffect(() => {
    focus();
  }, []);

  const focus = () => {
    inputRef.current.focus();
  };

  const submitHandler = () => {
    if (input) {
      const valusesCopy = [...values];
      setValues([...valusesCopy, input]);
      setInput("");
      focus();
      console.log(values);
    } else {
      focus();
    }
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
        }}
      >
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => {
            e.preventDefault();
            setInput(e.target.value);
            console.log(input);
          }}
        />
        <button>Focus input</button>
      </form>
      <div>
        {values.map((value) => (
          <p key={Math.random()}> {value}</p>
        ))}
      </div>
    </div>
  );
};

export default Task1
