import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ComingSoon from './pages/ComingSoon'
import './App.css'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/ComingSoon" element={<ComingSoon />} />
    </Routes>
  )
}

export default App
