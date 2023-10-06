/* eslint-disable prefer-const */
import { useAtom } from "jotai";
import { useState } from "react";
import { inputatom } from "../atom/atoms";
interface InputsProps {
  type: string;
  name: string;
}

const InputFild = (props: InputsProps) => {

  const [isinput, setinput] = useAtom(inputatom);
  const [isSize, setSize] = useState<number>(20);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handledata = (event: any) => {
    const name = event.target.name;
    setinput({...isinput,[name]: event.target.value });
    
  };
  return (
    <input
      className="bg-transparent focus:outline-none "
      style={{ width: isSize, maxWidth: 180, minWidth: 20 }}
      value={isinput[props.name]}
      onChange={(e) => {
        setSize(e.target.value.length * 8 + 10);
        handledata(e);
      }}
      type={props.type}
      name={props.name}
      placeholder=""
      required
    />
  );
};

export default InputFild;
