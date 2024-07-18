import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Service from './pages/Service'
import PortFolio from './pages/PortFolio'
import About from './pages/About'
import Client from './pages/Client'
import Team from './pages/Team'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import ModalGroupe from './pages/ModalGroupe'

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Service />
      <PortFolio />
      <About />
      <Team />
      <Client />
      <Contact />
      <Footer />
      <ModalGroupe />
    </div>
  )
}

export default App