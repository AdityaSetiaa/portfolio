import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContactMe from './Componenet/ContactMe.tsx'
import Projects from './Componenet/Projects.tsx'
import Techstack from './Componenet/Techstack.tsx'
import HoveringBar from './Componenet/HoveringBar.tsx'
import ScrollToTop from './Componenet/Scroll.tsx'

createRoot(document.getElementById('root')!).render(
  <>
    <BrowserRouter>
    <div className=" w-auto bg-black flex justify-center flex-row">
    <HoveringBar/>

    </div>
    <ScrollToTop/>

    <Routes>   
      
      <Route path="/" element={<App />} />   
      <Route path="/Tech" element={<Techstack />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<ContactMe />} />
    </Routes>
    </BrowserRouter>
  </>,
)
