import { useState, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink, Router, useParams } from 'react-router-dom'
import './Perfil.css'
import SVG from "./logo.jsx"
import userIcon from "/user.png"
import location from '/SVGRepo_iconCarrier.png'

function Perfil({ albums }) {
    return (
        <main className='perfilMain'>
            <div className="genContainer">
                <main className='perfilContainer'>
                    <div className='perfilInfo'>
                        <div className='IconandBio'>
                            <div style={{ backgroundImage: "url(" + userIcon + ")" }} className="userIcon"></div>
                            <button className='EditarPerfil'>Editar Perfil</button>
                        </div>
                        <div className='NameLocation'>
                            <p className='userName'>gizmo</p>
                            <div className='iconAndLocation'>
                                <svg className='locationIcon' width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.55556 13.5C8.08333 10.9 10.6111 8.57184 10.6111 5.7C10.6111 2.82812 8.34767 0.5 5.55556 0.5C2.76345 0.5 0.5 2.82812 0.5 5.7C0.5 8.57184 3.02778 10.9 5.55556 13.5Z" stroke="#C5C5C5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5.55577 6.99997C6.35354 6.99997 7.00022 6.3533 7.00022 5.55553C7.00022 4.75778 6.35354 4.11108 5.55577 4.11108C4.75801 4.11108 4.11133 4.75778 4.11133 5.55553C4.11133 6.3533 4.75801 6.99997 5.55577 6.99997Z" stroke="#C5C5C5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <p className='userLocation'>Carangueijo, Niterói</p>
                            </div>
                        </div>
                        <div className='Bio'>
                            <p >Dhafdasdhkadhadhkasdhasghkdsakdsjhsda</p>
                        </div>
                    </div>
                    <div className='albunsFav'>
                        <p className='Title'>Albuns Favoritos</p>
                        <div className='albunsContainer'>
                            < img className='Album' src="https://i.pinimg.com/736x/d4/8a/ae/d48aae594dd5a62c8efaed755d8fc25a.jpg" alt="" />
                            < img className='Album' src="https://i.pinimg.com/736x/55/a3/bd/55a3bdd43b4502168922e170d8bf7d46.jpg" alt="" />
                            < img className='Album' src="https://i.pinimg.com/736x/bc/9f/f0/bc9ff0729d85b6d85ee42e3869cad510.jpg" alt="" />
                            < img className='Album' src="https://i.pinimg.com/736x/62/43/2f/62432fd49b047b4f51295878958d997b.jpg" alt="" />
                        </div>
                    </div>
                    <div className='Title'>
                        <p className='albunsRec'>Albuns Recentes</p>
                        <p className='VerTudo'>Ver tudo</p>
                    </div>
                    <div className='albunsContainer2'>
                        < img className='Album' src="https://i.pinimg.com/1200x/9d/41/71/9d4171ec44d80e197e5a52192f74f178.jpg" alt="" />
                        < img className='Album' src="https://i.pinimg.com/1200x/31/9b/7b/319b7b6036d71254292e6fa83c84d7df.jpg" alt="" />
                        < img className='Album' src="https://i.pinimg.com/736x/cb/d6/dd/cbd6dde9f19c87d3ee0abbd4bea42ae7.jpg" alt="" />
                        < img className='Album' src="https://i.pinimg.com/736x/ad/8c/b6/ad8cb6088235829545d3254c6da948a1.jpg" alt="" />
                        < img className='Album' src="https://i.pinimg.com/1200x/9d/41/71/9d4171ec44d80e197e5a52192f74f178.jpg" alt="" />
                        {albums.map((album, i) => <Link to={'/album/' + album.id}><img src={album.cover} className="Album" /></Link>)}
                    </div>
                </main>
                <main className='perfilContainer'>
                    <div className='perfilInfo'>
                        <div className='perfilInfoN'>
                            <p className='userNumber'>0</p>
                            <p className='userLabel'>Ratings</p>
                        </div>
                        <div className='perfilInfoN'>
                            <p className='userNumber'>0</p>
                            <p className='userLabel'>Seguidores</p>
                        </div>
                        <div className='perfilInfoN'>
                            <p className='userNumber'>0</p>
                            <p className='userLabel'>Seguindo</p>
                        </div>
                    </div>
                    <div className='Title1'>
                        <p>Listas</p>
                        <p className='VerTudo'>Ver tudo  </p>
                    </div>
                    <div className='listasContainer'>
                        <div className='lista1'>

                            <div className='albumListaContainer'>
                                <p className='albumListaTitle'>Lista 1</p>
                                <div className='albumListaContainer2'>
                                    <img className='albumLista' src="https://i.pinimg.com/736x/d4/8a/ae/d48aae594dd5a62c8efaed755d8fc25a.jpg" alt="" />
                                    <img className='albumLista' src="https://i.pinimg.com/736x/d4/8a/ae/d48aae594dd5a62c8efaed755d8fc25a.jpg" alt="" />
                                    <img className='albumLista' src="https://i.pinimg.com/736x/d4/8a/ae/d48aae594dd5a62c8efaed755d8fc25a.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='lista2'>

                            <div className='albumListaContainer'>
                                <p className='albumListaTitle'>Lista 2</p>
                                <div className='albumListaContainer2'>
                                    <img className='albumLista' src="https://i.pinimg.com/736x/d4/8a/ae/d48aae594dd5a62c8efaed755d8fc25a.jpg" alt="" />
                                    <img className='albumLista' src="https://i.pinimg.com/736x/d4/8a/ae/d48aae594dd5a62c8efaed755d8fc25a.jpg" alt="" />
                                    <img className='albumLista' src="https://i.pinimg.com/736x/d4/8a/ae/d48aae594dd5a62c8efaed755d8fc25a.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </main>
    )
}

export default Perfil 