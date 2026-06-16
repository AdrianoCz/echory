import { useState, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink, Router, useParams } from 'react-router-dom'
import './Perfil.css'
import SVG from "./logo.jsx"
import userIcon from "/user.png"

function Perfil() {
    return(
        <main>
            <div className="genContainer">
                <div className='perfilInfo'>
                    <div className='IconandBio'>
                       <img className='userIcon' src={userIcon} alt="" />
                       <button className='EditarPerfil'>Editar Perfil</button>
                    </div>
                    <div className='NameLocation'>
                        <p className='userName'>John Doe</p>
                        <p className='userLocation'>New York, NY</p>
                    </div>
                
                     <p className='Bio'>Dhafdasdhkadhadhkasdhasghkdsakdsjhsda</p>
                </div>
                
            
            </div>
        </main>
    )
}

export default Perfil 