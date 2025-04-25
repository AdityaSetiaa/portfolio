import { projects } from "../assets/Projects.ts"


const Projects = () => {
  return (
    
    
    <div className="w-screen bg-black text-white flex flex-col  items-center px-4 py-10">
  {/* Title */}
  
<div className="w-full max-w-200 text-left mb-10">
  {/* Projects Grid */}
  <div className="h-auto w-auto justify-center items-center ">
  <div className="w-full max-w-6xl text-left mb-10">
    <p className="text-3xl font-bold underline text-white">Projects</p>
  </div>
  {
          projects.map((project) => 
            <div className="h-auto w-auto rounded flex flex-cols justify-center items-center shadow-lg hover:scale-105 transition duration-300 ">
              <div className="mb-12 " >
                <h1><img className="flex h-auto w-auto" src={project.image}/> </h1>
                <div className=""><h1 className="text-5xl text-white mt-4">{project.title}</h1>
                <span className="flex justify-end items-center">
                  {
                  project.status === "finished" ?
                  <span className="text-green-800 font-normal bg-green-500 rounded justify-center text-center px-3">Finished</span> :
                  project.status === "in progress" ?
                  <span className="text-yellow-500 font-extralight justify-center text-center">In Progress</span> :
                  project.status === "upcoming" ?
                  <span className="text-red-500 font-extralight justify-center text-center">Upcoming</span> :
                  <span className="text-red-500 font-extralight justify-center text-center">Unknown</span>
                  }
                  </span></div>
                <p className="text-white font-extralight">{project.description}</p>
                <p className="text-white font-extralight">
                  {
                    project.techStack.map((tech:any) => 
                      <span className="text-cyan-500 ">{tech} | </span>
                    )
                  }
                  </p>
                <a href={project.link} className="text-white"><i className="fa-brands fa-github p-4 text-3xl hover:text-slate-400"></i></a>
              </div>
            </div> )
          }
  </div>
  </div>
</div>

   
  )
}

export default Projects
