import { IconPlayerPlayFilled } from "@tabler/icons-react"
import Box from "../components/Box"

export default function Signup() {

    return (
        
        <Box>
            <div className="p-5 h-[560px] rounded-boxRadius bg-boxBg border-solid border-2 border-boxBorder flex gap-[10px]">
                <div className="h-auto w-[480px] px-[20px] py-[75px] rounded-boxRadius bg-insideBoxBg border-solid border-2 border-boxBorder">
                    <div className="text-[36px]">Signup</div>
                    <div className="text-[16px]">We are waiting for you </div>
                    <div className="w-[350px] h-[250px] mt-3 py-12 px-3 rounded-boxRadius bg-boxBg border-solid border-2 border-boxBorder text-t-text text-[16px] relative shadow-box-1 ">
                        <span className="">&#123;</span><br/>
                        <span className="">
                            &emsp;"Username":<span className="text-white">&ensp;"<input className="bg-transparent" type="text"/>"</span>,
                        </span><br/>
                        <span className="">
                            &emsp;"Email":<span className="text-white">"&ensp;<input className="bg-transparent" type="email"/>"</span>,
                        </span><br/>
                        <span className="">
                            &emsp;"Password":<span className="text-white">"&ensp;<input className="bg-transparent" type="password"/>"</span>,
                        </span><br/>
                        <span className="">
                            &emsp;"Show Password": &ensp;<select className="bg-transparent appearance-none text-acent" ><option>false</option><option>true</option></select>,
                        </span><br/>
                        <span className="">&#125;</span>
                        <button className="w-9 h-9 bg-insideBoxBg bottom-1 right-1 absolute rounded-full flex items-center justify-center"><IconPlayerPlayFilled className=""/></button>
                    </div>
                </div>
                <div className="h-auto w-full rounded-boxRadius bg-insideBoxBg border-solid border-2 border-boxBorder">
                    
                </div>

            </div>
        </Box>
    )
}
