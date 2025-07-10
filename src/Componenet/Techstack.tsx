import html from "../assets/html (2).svg";
import htmlHover from "../assets/html (3).svg";

import css from "../assets/css (2).svg";
import csshover from "../assets/css-alt.svg";
import reactHover from "../assets/react (3).svg";
import javascript from "../assets/js.png";
import javascriptHover from "../assets/js (1).svg";
import react from "../assets/react (2).svg";
import tailwind from "../assets/tailwind-css-(1).svg";
import javaHover from "../assets/java (2).svg";
import tailwindHover from "../assets/tailwind-css (2).svg";
import typescript from "../assets/typescript (1).svg";
import java from "../assets/java (1).svg";
import python from "../assets/python (1).svg";
import pythonHover from "../assets/python (2).svg";

import TypeScriptHover from "../assets/typescript (2).svg";

import "../index.css";

const Techstack = () => {
  return (
    <>
    <div className="h-100 w-200 bg-transparent border-2 flex justify-center ">
     
      <div className="h-auto w-screen flex mt-30 flex-col">
      <div className="h-auto w-auto flex flex-wrap">
      <p className="text-3xl font-bold underline text-white p-4  flex flex-wrap ml-4">Tools</p>
      </div>
        <div className=" p-2 flex  border-2 border-slate-300 shadow-lg slide" >
          
          <div className="flex flex-row   border-2 items-center gap-auto h-40 gap-10 w-auto p-5 list">
            {/*html*/}
            <div style={{zIndex:1}} className="relative item group w-17 h-17 ">
              <img
                src={html}
                alt=""
                className="h-17 w-auto  object-contain absolute inset-0 transition duration-300 opacity-100 group-hover:opacity-0"
              />
              <img
                src={htmlHover}
                alt=""
                className="h-17 object-contain absolute inset-0 transition  duration-300 opacity-0 group-hover:opacity-100 hover:scale-125"
              />
            </div>
            {/*css*/}
            <div style={{zIndex:2}} className="relative item group w-17 h-17 min-w-[5rem]">
              <img
                src={css}
                alt=""
                className="h-17 w-auto object-contain absolute inset-0 transition duration-300 opacity-100 group-hover:opacity-0"
              />
              <img
                src={csshover}
                alt=""
                className="h-17 object-contain absolute inset-0 transition duration-300 opacity-0 group-hover:opacity-100 hover:scale-125"
              />
            </div>

            {/*javascript*/}
            <div style={{zIndex:3}} className="relative item group w-17 h-17 min-w-[5rem]">
              <img
                src={javascript}
                alt=""
                className="h-17 w-auto object-contain absolute inset-0 transition duration-300 opacity-100 group-hover:opacity-0"
              />
              <img
                src={javascriptHover}
                alt=""
                className="h-17 object-contain absolute inset-0 transition duration-300 opacity-0 group-hover:opacity-100 hover:scale-125"
              />
            </div>
            {/*typescript*/}
            <div style={{zIndex:4}} className="relative item group w-17 h-17 min-w-[5rem]">
              <img
                src={typescript}
                alt=""
                className="h-17 w-auto object-contain absolute inset-0 transition duration-300 opacity-100 group-hover:opacity-0"
              />
              <img
                src={TypeScriptHover}
                alt=""
                className="h-17 object-contain absolute inset-0 transition duration-300 opacity-0 group-hover:opacity-100 hover:scale-125"
              />
            </div>

            {/*react*/}
            <div style={{zIndex:5}} className="relative item group w-17 h-17 min-w-[5rem]">
              <img
                src={react}
                alt=""
                className="h-17 w-auto object-contain absolute inset-0 transition  duration-300 opacity-100 group-hover:opacity-0"
              />
              <img
                src={reactHover}
                alt=""
                className="h-17 object-contain absolute inset-0 transition duration-300 opacity-0 group-hover:opacity-100  hover:scale-125"
              />
            </div>

            {/*taiwind*/}
            <div style={{zIndex:6}} className="relative item group w-17 h-17 min-w-[5rem]">
              <img
                src={tailwind}
                alt=""
                className="h-17 w-auto object-contain absolute inset-0 transition duration-300 opacity-100 group-hover:opacity-0"
              />
              <img
                src={tailwindHover}
                alt=""
                className="h-17 object-contain absolute inset-0 transition duration-300 opacity-0 group-hover:opacity-100 hover:scale-125"
              />
            </div>

            {/*java*/}
            <div style={{zIndex:7}} className="relative item group w-17 h-17 min-w-[5rem]">
              <img
                src={java}
                alt=""
                className="h-17 w-auto object-contain absolute inset-0 transition duration-300 opacity-100 group-hover:opacity-0"
              />
              <img
                src={javaHover}
                alt=""
                className="h-17 object-contain absolute inset-0 transition duration-300 opacity-0 group-hover:opacity-100 hover:scale-125"
              />
            </div>

            {/*python*/}
            <div style={{zIndex:8}} className="relative item group w-17 h-17 min-w-[5rem]">
              <img
                src={python}
                alt=""
                className="h-17 w-auto object-contain absolute inset-0 transition duration-300 opacity-100 group-hover:opacity-0"
              />
              <img
                src={pythonHover}
                alt=""
                className="h-17 object-contain absolute inset-0 transition duration-300 opacity-0 group-hover:opacity-100 hover:scale-125"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Techstack;
