import { useState, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink, Router, useParams } from 'react-router-dom'
import './App.css'
import SVG from "./logo.jsx"
import userIcon from "/user.png"

function AvaliacaoAlbum() {
    const ratingsBorderColor = ["#300a05", "darkred", "red", "#ff7300", "yellow", "greenyellow", "green", "#0084ff", "#ffb700"]
    const ratingsBackgroundColor = ["#974b412f", "#582f2f2f", "#ff43432f", "#f58f3c2f", "#ffff812f", "#c1f86f2f", "#3d803d2f", "#5bb0ff2f", "#ffd05b2f"]
    const ratings = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]
    const Svg = SVG();
    const { albumId } = useParams()
    const albums = [{ id: "1", name: "Imaginal Disk", author: "Magdalena Bay", rating: 5, reviewNumber: 123}]
    const album = albums.filter((album) => album.id == albumId)[0]

    if (album == undefined) {
        return <div>404, album not found</div>
    }
    const ratingRange = album.rating == 5 ? 5 : ratings.filter((rating, i, array) => album.rating >= rating && album.rating < array[i + 1])[0];
    console.log(ratingRange)
    return (
        <div className='genContainer'>
            <div className='topHalfContainer'>
                <div className='albumCover'></div>
                <div className='nameReviewContainer'>
                    <div className='albumName infoElement'>
                        <p id='albumName'>{album.name}</p>
                        <p id='albumAuthor'>{album.author}</p>
                    </div>
                    <div className="reviewInfo infoElement">
                        <div className="ratingContainer" style={
                            {
                                borderColor: ratingsBorderColor[ratings.indexOf(ratingRange)],
                                backgroundColor: ratingsBackgroundColor[ratings.indexOf(ratingRange)]
                            }}>
                                <p>{album.rating}</p> {Svg.star("albumRatingStar", ratingsBorderColor[ratings.indexOf(ratingRange)], ratingsBorderColor[ratings.indexOf(ratingRange)], (album.rating == 5))}</div>
                        <div className="reviewNumberContainer">
                            <p className='reviewNumber'>{album.reviewNumber}</p>
                            <p className='reviewNumberText'>avaliações</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='botHalfContainer'></div>
        </div>
    )
}

function App() {
    const Svg = SVG()
    return (<>
        <BrowserRouter>
            <nav>
                <Link to="/">
                    {Svg.logo("navLogo")}
                </Link>
                <div className='userContainer'>
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
