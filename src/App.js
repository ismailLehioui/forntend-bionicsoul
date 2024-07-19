import React, { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from './pages/about/About'
import Team from './pages/Team'
import Contact from './pages/Contact'

import Home from './components/Home'

// import Galerie from './pages/galerie/Galerie'

function App() {
  return (
    <>

      <BrowserRouter >
        <Routes>

          <Route path="/" element={<Home />}>
            <Route path="about" element={<About />} />
            <Route path="team" element={<Team />} />
            <Route path="contact" element={<Contact />} />
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