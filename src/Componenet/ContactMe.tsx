import { useLocation } from "react-router-dom";

const ContactMe = () => {

  


  const location = useLocation();
  const isFullPage = location.pathname === "/contact";

  return (
    <>
    <div className={`w-auto transition-all duration-500 ease-in-out ${
  isFullPage
    ? 'h-screen flex flex-col items-center justify-center overflow-hidden bg-black'
    : 'h-1/2 flex flex-col items-center justify-center overflow-hidden bg-black'
}`}
>
  <div className="w-full h-full max-w-5xl flex flex-col lg:flex-row items-center justify-center gap-14 border rounded-md  mb-auto">
    
    {/* Contact Info */}
    <div className="flex flex-col gap-3 w-full lg:w-1/2">
      <p className="text-white font-bold underline text-lg">Get in touch:</p>
      <p className="text-white font-extralight">
        If you have any queries, you can reach me out at
      </p>
      <p className="text-white font-extralight">
        <div className="flex">
        <i className="fa fa-envelope text-white mr-2"></i>
        :<a
          href="mailto:adityasetia@outlook.com"
          className="underline text-cyan-500"
        >
           adityasetia@outlook.com
        </a>
        </div>
        <h1 className="flex mr-4"><i className="fa-solid fa-phone text-white font-extralight mr-2"></i><p>: 91 9256575961</p></h1>
      </p>

      <div className="flex flex-col justify-center items-center mt-4">
        <p className="text-white mb-2">or</p>
        <div className="flex flex-row justify-center items-center gap-4">
          <i className="fa-brands fa-github text-3xl text-white hover:text-cyan-500 cursor-pointer"></i>
          <i className="fa-brands fa-x-twitter text-3xl text-white hover:text-cyan-500 cursor-pointer"></i>
        </div>
      </div>
    </div>

    {/* Contact Form */}
    {/* <form className="flex flex-col gap-4 w-full lg:w-1/2 font-extralight font-sans">
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <input
          type="text"
          className="bg-black border border-slate-600 rounded p-2 text-slate-300 h-10 w-full md:w-1/2"
          placeholder="Full Name"
        />
        <input
          type="text"
          className="bg-black border border-slate-600 rounded p-2 text-slate-300 h-10 w-full md:w-1/2"
          placeholder="Email"
        />
      </div>

      <textarea
        className="h-40 w-full p-2 bg-black text-white rounded-md border border-slate-600"
        placeholder="Your Message"
      ></textarea>

      <button
        type="submit"
        className="h-10 w-full bg-white text-black rounded-md border border-black hover:bg-slate-500 hover:text-white transition duration-300"
      >
        Send
      </button>
    </form> */}
  </div>
</div>

    
  <footer className='p-7 w-auto  h-20 text-white mt-10  bg-black'>Made by Adi </footer>
  </>
  );
};

export default ContactMe;
