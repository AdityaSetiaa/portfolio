import { NavLink } from "react-router-dom"
import "@fortawesome/fontawesome-svg-core"
const HoveringBar = () => {

  const handleClickhome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <div className="w-80 h-16 fixed backdrop-blur-xs z-50 shadow flex gap-5 justify-between border-2 border-slate-800 p-7 items-center mt-5 rounded-4xl ">
      <div className="flex flex-erap justify-evenly items-center w-full ">
        <NavLink to="/">
         <i className="fa fa-home text-white text-2xl rounded-4xl cursor-pointer hover:text-black hover:backdrop-blur-sm hover:bg-slate-600 p-3 duration-200 hover:scale-125" onClick={handleClickhome}></i></NavLink>
         <NavLink to="/projects"><i className="fa fa-file text-white text-2xl  rounded-4xl cursor-pointer hover:text-black hover:bg-slate-500 p-3 hover:backdrop-blur-sm duration-200 hover:scale-125"></i></NavLink>
         <NavLink to="/contact" ><i className="fa fa-envelope text-white text-2xl  rounded-4xl cursor-pointer hover:text-black hover:bg-slate-600 p-3 duration-200 hover:scale-125 " ></i></NavLink>
         
      </div>
    </div>
  )
}

export default HoveringBar
