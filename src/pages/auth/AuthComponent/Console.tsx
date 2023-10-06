import { useAtom } from "jotai";
import { cnsoleatom} from "../../../atom/atoms";
import { getformatAMPM } from "../../../utils/time";
import { useEffect } from "react";

interface Inputbox {
  inputData: { name: string; type: string }[];
  first: string;
  Second?: string;
  third:string
}
const Time = new Date()
const Console = ({ inputData,first,Second ,third}: Inputbox) => {
  const [isconsole] = useAtom(cnsoleatom)
  useEffect(() => {
  }, [isconsole])
  
  return (
    <div className="text-xs tracking-tight h-56 p-7 rounded-boxRadius bg-boxBg border-solid border-2 border-boxBorder shadow-box-1 font-['JetBrains_Mono'] text-[14px]">
      {<span className="init text-t-text ">
        [{getformatAMPM(Time)}]{" "}
        <span className="text-white">
         {first}
        </span>
      </span>}

      {<div className="data">
        <br />
        <span className="text-t-text ">[{getformatAMPM(Time)}]{"{"}</span>
        <br />
        {inputData.map(({name}) => (
          <>
            <span className="text-t-text ">
              {"         "}"{name}":{" "}
              <span className="text-white">"{isconsole[name]}"</span>,
            </span>
            ,
            <br />
          </>
        ))}
        <span className="text-t-text ">{"        }"}</span>
        <br />
      </div>}
      
      {Second?<><br /><span className="text-t-text ">
              [{getformatAMPM(Time)}]&emsp;
              <span className="text-white">{Second}</span>
            </span>
            <br /></>:null}

     { <span className="responce text-t-text ">
        <br />
        [{getformatAMPM(Time)}]{" "}
        <span className="text-white">
          🎉<span className="text-acent">Success!</span> {third}
        </span>
      </span>}
    </div>
  );
};

export default Console;
