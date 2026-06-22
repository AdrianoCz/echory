import { useState, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink, Router, useParams } from 'react-router-dom'
import './App.css'
import SVG from "./logo.jsx"
import userIcon from "/user.png"
import AvaliacaoAlbum from './Album.jsx'


function App() {
    const Svg = SVG()
    return (<>
        <BrowserRouter basename='/echory'>
            <nav>
                <Link to="/">
                    {Svg.logo("navLogo")}
                </Link>
                <div className='profileContainer'>
                    <div className='searchBar'>{Svg.searchIcon("searchIcon")}</div>
                    <img className='userIcon' src={userIcon} alt="" />
                </div>
            </nav>
            <Routes>
                <Route path='/album/:albumId' element={<AvaliacaoAlbum />}></Route>
            </Routes>
        </BrowserRouter>
    </>
    )

}

export default App
