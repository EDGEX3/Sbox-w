import { IconCheck } from '@tabler/icons-react'
type varianttype = "inputOnly" | "outputOnly" | "both"
interface NodeData {
    title: string;
    description: string;
    variant: varianttype;
    classname?: string;
}

const Node = (props: NodeData) => {


    return (
        <div className={"w-48 h-20 relative bg-e3 rounded-boxRadius border-solid border-2 border-boxBorder flex " + props.classname} >
            <div className="p-3 flex items-center">
                <div className="px-2  ">
                    <div className="mb-1 text-e6 text-base font-semibold  font-['Hubot-Sans'] ">{props.title}</div>
                    <div className=" text-e2 text-[10px] font-['Hubot-Sans'] ">{props.description}</div>
                </div>
                <div className="w-6 h-6">
                    <div className="w-6 h-6  bg-lingre rounded-2xl   flex items-center justify-center">
                        <IconCheck size={16} style={{ color: "#00FFA3" }} />
                    </div>
                </div>
            </div>

            {(props.variant == "inputOnly") ?
                <div className="w-2 h-2 -left-1 top-9 absolute bg-e5 rounded-full " /> :
                null
            }
            {(props.variant == "outputOnly") ?
                <div className="w-2 h-2 -right-1 top-9 absolute bg-e5 rounded-full " /> :
                null
            }
            {(props.variant == "both") ?
                <>
                    <div className="w-2 h-2 -left-1 top-9  absolute bg-e5 rounded-full" />
                    <div className="w-2 h-2 -right-1 top-9 absolute bg-e5 rounded-full" />
                </> : null
            }

        </div>
    )
}

export default Node