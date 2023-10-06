import { useAtom } from "jotai/react";
import Box from "../../components/Box";
import Node from "../../components/Node";
import InputBox from "./AuthComponent/InputBox";
import { password } from "../../atom/atoms";
import { useEffect } from "react";
import Console from "./AuthComponent/Console";

export default function Signup() {
  const [showPass,setShowPass] = useAtom(password)
  useEffect(() => {
    setShowPass(false)
   }, [])
  const inputData = [
    {
      name: "Username",
      type: "text",
    },
    {
      name: "Email",
      type: "email",
    },
    {
      name: "Password",
      type: showPass ? "text" : "password",
    },
  ];

  return (
    <Box>
      <div className="p-5 h-[560px] max-w-screen-2xl rounded-boxRadius bg-boxBg border-solid border-2 border-boxBorder flex gap-[10px] relative">
        <InputBox inputData={inputData} discription="We are waiting for you " name="Signup"/>
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
                title="Stored In DB"
                description="data securely stored in db"
                variant={"inputOnly"}
                classname="self-end"
              />
            </div>
          </div>
          <Console inputData={inputData} first="Registering for the Project SBOX waitlist..." third="You're on the waitlist.
          Stay tuned for updates."/>
        </div>
      </div>
    </Box>
  );
}
