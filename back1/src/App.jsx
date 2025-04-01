import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Register from './components/Register'
import Login from './components/Login'

function App() {
  

  return (<>
  <BrowserRouter>
    <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
    </Routes>
  </BrowserRouter>
  </>
    
  )
}

export default App
