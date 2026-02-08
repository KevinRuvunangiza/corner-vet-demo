import { Routes, Route } from 'react-router'
import './index.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import About from './pages/About'
import Services from './pages/Services'
import Staff from './pages/Staff'
import Specials from './pages/Specials'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
