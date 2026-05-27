import { useState, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink, Router} from 'react-router-dom'
import './App.css'
import Logo from "./logo.jsx"
import userIcon from "/user.png"

function App() {
    
    return(<BrowserRouter>
        <nav>
            <Link to="/">
            <Logo />
            </Link>
            <div>
                <div className='searchBar'></div>
                <img className='userIcon' src={userIcon} alt="" />
            </div>
        </nav>

        
        </BrowserRouter>
    )
    
}

export default App
