/* eslint-disable @typescript-eslint/no-explicit-any */



const Grid = (prop:any) => {
    return (
      <div className="bg-grid-img w-full h-screen bg-cover bg-no-repeat absolute">
          <div className=" w-[500px] h-[500px] left-[300px] top-[58px] absolute bg-bgElipce bg-opacity-20 rounded-full blur-600xl -z-10"></div>
          {prop.children}
      </div>
    )
  }
  
  export default Grid