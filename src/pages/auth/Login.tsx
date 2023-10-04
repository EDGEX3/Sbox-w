import { IconPlayerPlayFilled } from "@tabler/icons-react";
import Box from "../../components/Box";
import Input from "../../components/Input";
import Node from "../../components/Node";
import { useState } from "react";

const login = () => {
  console.log("login");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showPass, setShowPass] = useState(false);

  const inputData = [
    {
      name: "Userinfo",
      type: "text",
    },
    {
      name: "Password",
      type: showPass ? "text" : "password",
    },
  ];
  return (
    <Box>
      <div className="p-5 h-[560px] max-w-screen-2xl rounded-boxRadius bg-boxBg border-solid border-2 border-boxBorder flex gap-[10px] relative">
        <div className="h-auto w-[480px] px-[20px] py-[75px] rounded-boxRadius bg-insideBoxBg border-solid border-2 border-boxBorder">
          <div className="text-[36px] text-e6">Login</div>
          <div className="text-[16px] text-e4">Welcome you again</div>
          <div className="w-[350px] h-[250px] mt-3 py-12 px-3 rounded-boxRadius bg-boxBg border-solid border-2 border-boxBorder text-t-text text-[14px] font-['JetBrains_Mono'] relative shadow-box-1 ">
            <span className="">&#123;</span>
            <br />
            {inputData.map((e) => (
              <>
                <span className="">
                  &emsp;"{e.name}":&ensp;
                  <span className="text-white">
                    "<Input type={e.type} name={e.name} />"
                  </span>
                  ,
                </span>
                <br />
              </>
            ))}
            <span className="">
              &emsp;"Show Password": &ensp;
              <button type="button" onClick={()=>setShowPass(!showPass)}>
                <span className="text-acent">
                  {showPass ? "true" : "false"}
                </span>
              </button>
              ,
            </span>
            <br />
            <span className="">&#125;</span>
            <button className="w-9 h-9 bg-insideBoxBg bottom-2 right-2 absolute rounded-full flex items-center justify-center">
              <IconPlayerPlayFilled style={{ color: "#00FFA3" }} />
            </button>
          </div>
        </div>
        <div className="h-auto w-full p-7 rounded-boxRadius bg-insideBoxBg border-solid border-2 border-boxBorder ">
          <div className="flex items-center justify-center">
            <div className="h-60 w-full p-4 flex items-center gap-14 relative">
              <Node
                title="Fetching Data"
                description="fetch and encode data"
                variant={"outputOnly"}
                classname="self-start"
              />
              <img
                src="/assets/line.png"
                className="absolute h-[67px]  top-[56px] left-[208px]"
              />
              <Node
                title="Sending Data"
                description="data securely sheered to server"
                variant={"both"}
                classname="self-center"
              />
              <img
                src="/assets/line.png"
                className="absolute h-[67px]  top-[120px] left-[460px]"
              />
              <Node
                title="Verifying Id"
                description="checking your credential"
                variant={"inputOnly"}
                classname="self-end"
              />
            </div>
          </div>
          <div className="h-56 p-7 rounded-boxRadius bg-boxBg border-solid border-2 border-boxBorder shadow-box-1 font-['JetBrains_Mono'] text-[14px]">
            <span className="text-t-text ">
              [9:37:59 pm]&emsp;
              <span className="text-white">
                Checking for the Project SBOX signing...
              </span>
            </span>
            <br />
            <span className="text-t-text ">
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#123;
            </span>
            <br />
            <span className="text-t-text ">
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"Username":&ensp;
              <span className="text-white">"xman"</span>,
            </span>
            <br />
            <span className="text-t-text ">
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"Password":&ensp;
              <span className="text-white">"*************"</span>,
            </span>
            <br />
            <span className="text-t-text ">
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#125;
            </span>
            <br />
            <span className="text-t-text ">
              [9:38:01 pm]&emsp;
              <span className="text-white">Credential matched</span>
            </span>
            <br />
            <span className="text-t-text ">
              [9:38:01 pm]&emsp;
              <span className="text-white">
                🎉<span className="text-acent">Success!</span> Success! Welcome
                back xman.
              </span>
            </span>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default login;
