import React, { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from './pages/about/About'
// import Team from './pages/team/Team'
import Contact from './pages/Contact'

import Home from './components/Home'
import Presentation from './pages/Presentation';
import Achievements from './pages/Achievements'
import Service from './pages/Service'
import Product from './pages/Product';

function App() {
  return (
    <>

      <BrowserRouter >
        <Routes>

          <Route path="/" element={<Home />}>
            <Route path="/" element={<Presentation />} />
            <Route path="about" element={<About />} />
            {/* <Route path="team" element={<Team />} /> */}
            <Route path="contact" element={<Contact />} />
            <Route path="achievement" element={<Achievements />} />
            <Route path="service" element={<Service />} />
            <Route path="products" element={<Product />} />



            {/* <Route path="galerie" element={<Galerie />} /> */}
            {/* <Route path="contact" element={<Contact />} />
            <Route path="contact" element={<Contact />} />
            <Route path="contact" element={<Contact />} /> */}

          </Route>

        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App