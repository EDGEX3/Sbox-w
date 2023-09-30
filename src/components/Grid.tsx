/* eslint-disable @typescript-eslint/no-explicit-any */



const Grid = (prop:any) => {
    return (
      <div className="bg-grid-img w-full h-screen bg-cover bg-no-repeat ">
          <div className="Ellipse3 w-[500px] h-[500px] absolute bg-teal-400 bg-opacity-[0.08] rounded-full blur-600xl top-[50px] left-[360px] " />
          {prop.children}
      </div>
    )
  }
  
  export default Grid