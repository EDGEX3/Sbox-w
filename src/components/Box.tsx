/* eslint-disable @typescript-eslint/no-explicit-any */

const Box = (prop:any) => {
  return (
    <div className="mt-14 mx-20 ">
        {prop.children}
    </div>
  )
}

export default Box