/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import { cnsoleatom, inputatom, password } from "../../../atom/atoms";
import { useAtom } from "jotai/react";
import InputFild from "../../../components/Input";
interface Inputbox {
  inputData: { name: string; type: string }[];
  name: string;
  discription: string;
}
const InputBox = ({ inputData, discription, name }: Inputbox) => {
  const [showPass, setShowPass] = useAtom(password);
  const setconsole = useAtom(cnsoleatom)[1];
  const isinput = useAtom(inputatom)[0];
  const setdata = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    setconsole(isinput);
  };
  return (
    <div className="h-auto w-[480px] px-[20px] py-[75px] rounded-boxRadius bg-insideBoxBg border-solid border-2 border-boxBorder">
      <div className="text-[36px] text-e6">{name}</div>
      <div className="text-[16px] text-e4">{discription}</div>
      <div className="text-base tracking-tight w-[350px] h-[250px] mt-3 py-12 px-3 rounded-boxRadius bg-boxBg border-solid border-2 border-boxBorder text-t-text text-[14px] font-['JetBrains-Mono'] relative shadow-box-1 ">
        <pre>
          <code>
            {"{\n"}
            {inputData.map((e) => (
              <>
                {" "}
                "{e.name}":
                <span className="text-white">
                  "<InputFild type={e.type} name={e.name} />"
                </span>
                ,
                <br />
              </>
            ))}

            <span className="">
              {" "}
              "Show Password":
              <button type="button" onClick={() => setShowPass(!showPass)}>
                <span className="text-acent">
                  {showPass ? "true" : "false"}
                </span>
              </button>
              ,
            </span>
            {"\n}"}
          </code>
        </pre>
        <button
          className="w-9 h-9 bg-insideBoxBg bottom-2 right-2 absolute rounded-full flex items-center justify-center"
          onClick={() => setdata()}
        >
          <IconPlayerPlayFilled style={{ color: "#00FFA3" }} />
        </button>
      </div>
    </div>
  );
};

export default InputBox;
