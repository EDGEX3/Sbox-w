import { IconArrowLeft } from '@tabler/icons-react';




export default function Home() {

    return (

        <div className="Nav w-full h-9 justify-between items-center inline-flex">
            <div className="Sbox1 w-9 h-9 justify-center items-center flex">
                <img className="Union w-9 h-9" src="/assets/sbox 1.svg" alt="not found logo" width={36} height={36} />
            </div>
            <div className="NavOption h-9 relative">
                <div className="Tab w-24 h-9 left-0 top-[1.44px] absolute justify-between items-center inline-flex">
                    <div className="Product w-24 h-6 text-white text-base font-normal font-['Hubot Sans'] tracking-tight">Product</div>
                    <div className="IconDown w-4 h-4 relative">
                    </div>
                </div>
                <div className="Tab w-24 h-7 left-[127.58px] top-[4.32px] absolute justify-between items-center inline-flex">
                    <div className="Product text-white text-base font-normal font-['Hubot Sans'] tracking-tight">Solution</div>
                    <div className="IconDown w-4 h-4 relative">
                    </div>
                </div>
                <div className="Tab w-24 h-7 left-[255.58px] top-[2.88px] absolute justify-between items-center inline-flex">
                    <div className="Product text-white text-base font-normal font-['Hubot Sans'] tracking-tight">Template</div>
                    <IconArrowLeft />
                </div>
                <div className="Tab w-24 h-9 left-[383.58px] top-0 absolute justify-between items-center inline-flex">
                    <div className="Product w-24 h-6 text-white text-base font-normal font-['Hubot Sans'] tracking-tight">Pricing</div>
                </div>
            </div>
            <a href="/signup" className="Signup h-8 px-3.5 py-1.5 bg-neutral-50 bg-opacity-5 rounded-2xl border border-zinc-300 border-opacity-40 justify-between items-center flex">
                <div className="Signup text-teal-400 text-sm font-medium font-['JetBrains Mono'] tracking-tight">
                    Signup
                </div>
            </a>
        </div>
    )
}
