import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import "./Home.css"

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <ul className='navigate'>
            <li className='lk'><Link to="/about">About</Link></li>
            <li className='lk'><Link to="/login">Login</Link></li>
            <li className='lk'><Link to="/register">Register</Link></li>
            <li className='lk'><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Home
