import About from './Componenet/About'
import Techstack from './Componenet/Techstack'
import Projects from './Componenet/Projects'
import ContactMe from './Componenet/ContactMe'
function App() {

  return (
    <div className="h-auto w-auto bg-black flex justify-center flex-col scroll-hidden items-center overflow-hidden">
      
      <About/>
      <Techstack/>
      <Projects/>
      <ContactMe/>
      
    </div>
  )
}

export default App
