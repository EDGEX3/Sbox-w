import { useState } from "react";
interface InputsProps {
  type: string;
  name: string;
}

const Input = (props: InputsProps) => {
  console.log("input");
  
  const [isSize, setSize] = useState<number>(20);
  const [isValue, setValue] = useState<number | string>("");
  return (
    <input
      className="bg-transparent focus:outline-none "
      style={{ width: isSize, maxWidth: 180, minWidth: 20 }}
      value={isValue}
      onChange={(e) => {
        setSize(e.target.value.length * 7+10);
        setValue(e.target.value);
      }}
      type={props.type}
      name={props.name}
      required
    />
  );
};

export default Input;
