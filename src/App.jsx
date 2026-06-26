import { useState, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink, Router, useParams } from 'react-router-dom'
import './App.css'
import SVG from "./logo.jsx"
import userIcon from "/user.png"
import AvaliacaoAlbum from './Album.jsx'
import Perfil from './Perfil.jsx'


function App() {
    const Svg = SVG()
    const albums = [{
        id: "1", name: "Imaginal Disk", author: "Magdalena Bay", comments: [{ user: "cacal", userAvatar: "", comment: "Prefiro a versão não finalizada encontrada em um cd na tanzania", rating: 3.5 }, { user: "gizmobfr", userAvatar: "", comment: "test", rating: 5 }, { user: "clara", userAvatar: "", comment: "test", rating: 4 }]
        , cover: "https://m.media-amazon.com/images/I/81Q5apmglJL.jpg", rating: [3.5, 5, 4], reviewNumber: 123, label: "Mom+pop", releaseDate: "2024-08-23", genre: "Synth Pop", tracklist: ["She Looked Like Me!", "Killing Time", "True Blue Interlude", "Image", "Death and Romance", "Fear, Sex", "Vampire in The Corner", "Watching TV", "Tunnel Vision", "Love Is Everywhere", "Feeling Diskinserted?", "Thats my Floor", "Cry For Me", "Angel On a Satellite", "Ballad of Matt & Mica"]
    }];
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
                <Route path='/album/:albumId' element={<AvaliacaoAlbum albums={albums} />}></Route>
                <Route path='/profile/:userID' element={<Perfil />}> </Route>
            </Routes>
        </BrowserRouter>
    </>
    )

}

export default App
