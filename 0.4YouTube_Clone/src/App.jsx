import { useState } from 'react'
import NavBar from './Components/NavBar/NavBar'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'


function App() {
  return (
    <div>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/video/:categoryId/:videoId" element={<Video/>} />
        </Routes>
    </div>
  )
}

export default App
