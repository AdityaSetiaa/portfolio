import ".././index.css"

type ItemProps = {
    image: string;
    title: any;
    teckStack: any;
    status: string;
    description: string;
    id:any;
    link: string;
};

export default function ProjectItems(props: ItemProps) {
  const {image, title, teckStack, status, description,link } = props

return (
     <div>
        <div>
            <div className=" w-full h-screen justify-center items-center bg-[#f4f1ea] text-[#3e2723] p-15 mb-[-100%]  duration-300">
                <div className="w-auto h-1/2 bg-[fffaf0] rounded-lg p-5 m-5 border-2 border-[#3e2723] shadow-xl duration-300 overflow-y-clip opacity-100 hover:scale-110 hover:h-110 hover:w-70 hover:shadow-2xl" id="animate-rise">
                    <img src={image} alt="Book Cover" className="w-full h-50 object-cover rounded-lg hover:h-full duration-300"/>
                    <h2 className="text-xl font-bold mt-4 truncate">{title}</h2>
                    <p className="text-gray-700 mt-2 truncate">{description}</p>
                    <p className="text-gray-700">{teckStack}</p>
                    <p className="text-gray-700 mt-2 font-bold"> Status: {status}</p>
                    <a href={link} className="bg-[#3e2723] text-white px-4 py-2 rounded-lg mt-4 inline-block hover:bg-[#3e2723] hover:text-[#fffaf0] duration-300"></a>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
