const ContactMe = () => {
  return (
    <>
    
    <div className="h-screen w-full flex fle-col justify-center border-1  overflow-hidden bg-black">
    
    <div className="h-auto w-200 p-5 mt-30 border-1 justify-center flex flex-wrap">
      
    <div className="h-auto flex flex-col border-1 ">
        <p className="text-white font-bold underline">Get in touch: </p>
        <div>
          <p className="text-white font-extralight">If you have any queries, you can reach me out at </p>
          <p className="text-white font-extralight"> </p>
          <p className="text-white font-extralight"><i className="fa fa-envelope text-white  rounded-2xl" ></i> <a href="mailto:adityasetia@outlook.com" className="underline text-cyan-500">adityasetia@outlook.com</a> </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-white mt-2"> or </p>
          <div className="flex flex-row justify-center items-center gap-3 m-3">
          <i className="fa-brands text-3xl fa-github text-white"></i>
          <i className="fa-brands text-3xl fa-x-twitter text-white"></i>
          </div>
        </div>
      </div>
      <form className="flex flex-col p-4 border border-slate-600 w-full max-w-2xl mx-auto font-extralight font-sans">
  <div className="flex flex-col md:flex-row justify-center mb-4 items-center gap-4 w-full">
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

  <div className="mb-4 w-full">
    <textarea
      className="h-40 w-full p-2 bg-black text-white rounded-md border border-slate-600"
      placeholder="Your Message"
    ></textarea>
  </div>

  <button
    type="submit"
    className="h-10 w-full md:w-1/3 self-center bg-white text-black rounded-md border border-black hover:bg-slate-500 hover:text-white transition duration-300"
  >
    Send
  </button>
</form>

      
    </div>
    
    
  </div>
  <footer className='p-7 w-auto  h-20 text-white  bg-black'>Made by Adi </footer>
  </>
  );
};

export default ContactMe;
