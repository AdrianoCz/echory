import { useState, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink, Router, useParams } from 'react-router-dom'
import './Perfil.css'
import SVG from "./logo.jsx"
import userIcon from "/user.png"

function Perfil() {
    return(
        <main>
            <div className="genContainer">
                <main className='perfilContainer'>
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
                <div className='albunsFav'>
                    <p className='Title'>Albuns Favoritos</p>
                    <div className='albunsContainer'>
                   < img className='Album1' src="https://i.pinimg.com/736x/d4/8a/ae/d48aae594dd5a62c8efaed755d8fc25a.jpg" alt="" />
                   < img className='Album2' src="https://i.pinimg.com/736x/55/a3/bd/55a3bdd43b4502168922e170d8bf7d46.jpg" alt="" />
                   < img className='Album3' src="https://i.pinimg.com/736x/bc/9f/f0/bc9ff0729d85b6d85ee42e3869cad510.jpg" alt="" />
                   < img className='Album4' src="https://i.pinimg.com/736x/62/43/2f/62432fd49b047b4f51295878958d997b.jpg" alt="" />
                   </div>
                </div>
                <div className='Title'>
                    <p className='albunsRec'>Albuns Recentes</p>
                    <p className='VerTudo'>Ver tudo</p>
                </div>
                <div className='albunsContainer'>
                      < img className='Album1' src="https://i.pinimg.com/1200x/9d/41/71/9d4171ec44d80e197e5a52192f74f178.jpg" alt="" />
                   < img className='Album2' src="https://i.pinimg.com/1200x/31/9b/7b/319b7b6036d71254292e6fa83c84d7df.jpg" alt="" />
                   < img className='Album3' src="https://i.pinimg.com/736x/cb/d6/dd/cbd6dde9f19c87d3ee0abbd4bea42ae7.jpg" alt="" />
                   < img className='Album4' src="https://i.pinimg.com/736x/ad/8c/b6/ad8cb6088235829545d3254c6da948a1.jpg" alt="" />
                </div>
                </main>
            
            </div>
        </main>
    )
}

export default Perfil 