import { useState, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink, Router, useParams } from 'react-router-dom'
import './App.css'
import SVG from "./logo.jsx"
import userIcon from "/user.png"

function RatingScreen({showRatingScreen, handleRate, album}){
    console.log(showRatingScreen)
    return(
        <div style={{display: showRatingScreen ? 'flex' : "none"}} className="  ratingScreen">
            <div className="ratingScreenTop">
                <div className="albumCover ratingScreenAlbumContainer"></div>
                <div><div className="ratingScreenInfoContainer">a</div><div className="ratingScreenInfoContainer">a</div></div>
            </div>
        </div>
    )
}
function Comment({user, userAvatar, comment, rating, style, star}) {
    return(
        <div className='comment'>
        <div className='userContainer'>
            <div style={{backgroundImage: userAvatar ? "url(" + userAvatar + ")" : "url(" + "/user.png" + ")"}} className='userAvatar'></div>
            <p>{user}</p>
            <div style={style} className="commentRating">{rating} {star}</div>
        </div>
        <div className='commentContainer'>
        {comment}
        </div>
        </div>
    )
}

function Stars() {
    const star = <svg className='star' width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.081 1L18.477 9.901C18.77 10.987 18.916 11.53 19.204 11.974C19.46 12.367 19.795 12.702 20.188 12.957C20.632 13.246 21.175 13.392 22.261 13.685L31.162 16.081L22.261 18.478C21.175 18.77 20.632 18.916 20.188 19.205C19.795 19.46 19.46 19.795 19.204 20.188C18.916 20.632 18.77 21.175 18.477 22.261L16.081 31.162L13.684 22.261C13.392 21.175 13.246 20.632 12.957 20.188C12.702 19.795 12.367 19.46 11.974 19.205C11.53 18.916 10.987 18.77 9.90097 18.478L1 16.081L9.90097 13.685C10.987 13.392 11.53 13.246 11.974 12.957C12.367 12.702 12.702 12.367 12.957 11.974C13.246 11.53 13.392 10.987 13.684 9.901L16.081 1Z" fill="" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>


    return star

}
function AvaliacaoAlbum() {
    const five = ['', '', '', '', ''];
    const ratingsBorderColor = ["#300a05", "darkred", "red", "#ff7300", "yellow", "greenyellow", "green", "#0084ff", "#ffb700"];
    const ratingsBackgroundColor = ["#974b412f", "#582f2f2f", "#ff43432f", "#f58f3c2f", "#ffff812f", "#c1f86f2f", "#3d803d2f", "#5bb0ff2f", "#ffd05b2f"];
    const ratings = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
    const Svg = SVG();
    const { albumId } = useParams()
    const albums = [{ id: "1", name: "Imaginal Disk", author: "Magdalena Bay",comments: [{user: "cacal", userAvatar: "", comment: "Prefiro a versão não finalizada encontrada em um cd na tanzania", rating: 3.5}, {user: "gizmobfr", userAvatar: "", comment: "test", rating: 5}, {user: "clara", userAvatar:"", comment:"test", rating: 4} ]
, cover: "https://m.media-amazon.com/images/I/81Q5apmglJL.jpg" , rating: [3.5, 5, 4], reviewNumber: 123, label: "Mom+pop", releaseDate: "2024-08-23", genre: "Synth Pop", tracklist: ["She Looked Like Me!", "Killing Time", "True Blue Interlude", "Image", "Death and Romance", "Fear, Sex", "Vampire in The Corner", "Watching TV", "Tunnel Vision", "Love Is Everywhere", "Feeling Diskinserted?", "Thats my Floor", "Cry For Me", "Angel On a Satellite", "Ballad of Matt & Mica"] }];
    const [album, setAlbum] = useState(albums.filter((album) => album.id == albumId)[0]);

    if (album == undefined) {
        return <div className='notFound'>404, album not found</div>
    }

    const [rating, setRating] = useState(album.rating.length != 0 ? ((album.rating.reduce((a, b) => a + b)) / album.rating.length).toFixed(1) : "NR");
    let ratingRange = rating == 5 ? 5 : rating < 5 && rating >= 4.5 ? 4.5 : ratings.filter((ratings, i, array) => i == 8 ? true == true : rating < array[i + 1])[0];
    const [personalRating, setPersonalRating] = useState(0);
    const [hasRated, setRated] = useState(false);
    const [showRatingScreen, toggleScreen] = useState(false);
    const handleRate = () => {
        
        if (hasRated === true) {
            album.rating[album.rating.length - 1] = personalRating;
            setRating((album.rating.reduce((a, b) => a + b) / album.rating.length).toFixed(1));
        } else{
            album.rating.push(personalRating);
            setAlbum(album);
            setRating((album.rating.reduce((a, b) => a + b) / album.rating.length).toFixed(1));
        }
        setRated(true);
    }

    return (
        <main>
            <RatingScreen showRatingScreen={showRatingScreen} handleRate={handleRate}/>
            <div className='genContainer'>
                <div className='topHalfContainer'>
                    <div style={{backgroundImage: "url(" + album.cover + ")"}} className='albumCover'></div>
                    <div className='nameReviewContainer'>
                        <div className='albumName infoElement'>
                            <p id='albumName'>{album.name}</p>
                            <p id='albumAuthor'>{album.author}</p>
                        </div>
                        <div className="reviewInfo infoElement">
                            <div className="ratingContainer" style={
                                {
                                    boxShadow: rating == 5 ? "0px 0px 10px 0px #fff3889c" : "none",
                                    borderColor: ratingsBorderColor[ratings.indexOf(ratingRange)],
                                    backgroundColor: ratingsBackgroundColor[ratings.indexOf(ratingRange)]
                                }}>
                                <p>{rating}</p> {Svg.star("albumRatingStar", ratingsBorderColor[ratings.indexOf(ratingRange)], ratingsBorderColor[ratings.indexOf(ratingRange)], (rating == 5))}</div>
                            <div className="reviewNumberContainer">
                                <p className='reviewNumber'>{album.rating.length}</p>
                                <p className='reviewNumberText'>reviews</p>
                            </div>

                        </div>

                    </div>
                    <div className='responsiveContainer'>
                    <div className="genInfoContainer infoElement">
                        <div className="genInfo">
                            <p>Release Date</p>
                            <div className="genInfoText">{album.releaseDate}</div>
                        </div>
                        <div className="genInfo">
                            <p>Genre</p>
                            <div className="genInfoText">{album.genre}</div>
                        </div>
                        <div className="genInfo">
                            <p>Label</p>
                            <div className="genInfoText">{album.label}</div>
                        </div>
                    </div>
                    <div className="review infoElement">
                        <div className="starsContainer">
                        <div className='stars'>
                            {five.map((a, i) => (Svg.ratingStar("star", () => { setPersonalRating(i + 1); }, (i + 1 <= personalRating))))}

                        </div>
                        {Svg.maximize("maximizeButton", ()=>{toggleScreen(!showRatingScreen);})}
                        </div>
                        <textarea name="" id="reviewComment"></textarea>
                        <div className='rateButtonContainer'><div onClick={handleRate} className='rateButton'>Rate</div></div>
                    </div></div>
                </div>
                <div className='botHalfContainer'>
                    <div className="comments">
                        <div className="commentTitle"><p>Comments</p><Link>See more</Link></div>
                        <div className="commentSection infoElement">
                            {album.comments.map((element)=> <Comment user={element.user} userAvatar={element.userAvatar} comment={element.comment} rating={element.rating} style={{borderColor: ratingsBorderColor[ratings.indexOf(element.rating)], backgroundColor: ratingsBackgroundColor[ratings.indexOf(element.rating)]}} star={Svg.star("commentRatingStar", ratingsBorderColor[ratings.indexOf(element.rating)], ratingsBorderColor[ratings.indexOf(element.rating)], element.rating == 5)} />)}
                        </div>
                    </div>
                    <div className="tracklist">
                                <p>Tracklist</p>
                                <div className='tracklistContainer'>
                                {album.tracklist.map((element) => <div className='track infoElement'>{element}</div>)}
                                </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default AvaliacaoAlbum