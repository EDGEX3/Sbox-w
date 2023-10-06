/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import { password } from "../../atom/atoms";
import Box from "../../components/Box";
import Node from "../../components/Node";
import InputBox from "./AuthComponent/InputBox";
import { useAtom } from "jotai/react";
import Console from "./AuthComponent/Console";

const login = () => {
  const [showPass, setShowPass] = useAtom(password);
  useEffect(() => {
    setShowPass(false);
  },[]);
  const inputData = [
    {
      name: "Username",
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
        <InputBox inputData={inputData} discription="Welcome you again" name="Signin"/>
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
          <Console
            inputData={inputData}
            first="Checking for the Project SBOX signing..."
            Second="Credential matched"
            third="Welcome
                back"
          />
        </div>
      </div>
    </Box>
  );
};

export default login;
