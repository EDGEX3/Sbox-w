import { IconPlayerPlayFilled } from "@tabler/icons-react"
import Box from "../components/Box"
import Input from "../components/Input"


export default function Signup() {
    console.log("signup");
    
    return (

        <Box>
            <div className="p-5 h-[560px] rounded-boxRadius bg-boxBg border-solid border-2 border-boxBorder flex gap-[10px]">
                <div className="h-auto w-[480px] px-[20px] py-[75px] rounded-boxRadius bg-insideBoxBg border-solid border-2 border-boxBorder">
                    <div className="text-[36px] text-e6">Signup</div>
                    <div className="text-[16px] text-e4">We are waiting for you </div>
                    <div className="w-[350px] h-[250px] mt-3 py-12 px-3 rounded-boxRadius bg-boxBg border-solid border-2 border-boxBorder text-t-text text-[14px] font-['JetBrains_Mono'] relative shadow-box-1 ">
                        <span className="">&#123;</span><br />
                        <span className="">
                            &emsp;"Username":&ensp;<span className="text-white">"<Input type="text" name="username"/>"</span>,
                        </span><br />
                        <span className="">
                            &emsp;"Email":&ensp;<span className="text-white">"<Input type="email" name="email"/>"</span>,
                        </span><br />
                        <span className="">
                            &emsp;"Password":&ensp;<span className="text-white">"<Input type="password" name="password"/>"</span>,
                        </span><br />
                        <span className="">
                            &emsp;"Show Password": &ensp;<button type="button"><span className="text-acent">false</span></button>,
                        </span><br />
                        <span className="">&#125;</span>
                        <button className="w-9 h-9 bg-insideBoxBg bottom-2 right-2 absolute rounded-full flex items-center justify-center"><IconPlayerPlayFilled  style={{color:"#00FFA3"}} /></button>
                    </div>
                </div>
                <div className="h-auto w-full p-7 rounded-boxRadius bg-insideBoxBg border-solid border-2 border-boxBorder ">
                    <div className="h-56">
                        

                    </div>
                    <div className="h-56 p-7 rounded-boxRadius bg-boxBg border-solid border-2 border-boxBorder shadow-box-1 font-['JetBrains_Mono'] text-[14px]" >
                        <span className="text-t-text ">
                            [9:37:59 pm]&emsp;<span className="text-white">Registering for the Project SBOX waitlist...</span>
                        </span><br />
                        <span className="text-t-text ">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#123;</span><br />
                        <span className="text-t-text ">
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"Username":&ensp;<span className="text-white">"xman"</span>,
                        </span><br />
                        <span className="text-t-text ">
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"Email":&ensp;<span className="text-white">"xman@edgex.nex"</span>,
                        </span><br />
                        <span className="text-t-text ">
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"Password":&ensp;<span className="text-white">"*************"</span>,
                        </span><br />

                        <span className="text-t-text ">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#125;</span><br />
                        <span className="text-t-text ">
                            [9:38:01 pm]&emsp;<span className="text-white">🎉<span className="text-acent">Success!</span> You're on the waitlist. Stay tuned for updates.</span>
                        </span>
                        
                    </div>
                </div>

            </div>
        </Box>
    )
}
