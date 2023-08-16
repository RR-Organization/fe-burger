import { Route, Routes } from 'react-router-dom'
import AboutBody from './components/AboutUs'
import HeroBody from './components/Hero'
import MenuBody from './components/Menu'
import NavBar from './components/Navbar'
import CardService from './components/Service'
import Homepage from './page/Homepage'

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Homepage />}></Route>
    </Routes>
    </>
  )
}

export default App
