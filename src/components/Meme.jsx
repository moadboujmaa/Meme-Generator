import React from "react";
import memeData from "../memeData";

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/1g8my4.jpg");

    function getMemeImage() {
        const memesArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }
    return (
    <main>
        <div className="form">
            <input 
                type="text" 
                className="form-input"
                placeholder="Top Text"
            />
            <input 
                type="text" 
                className="form-input"
                placeholder="Bottom Text"
            /> 
            <button 
                className="form-button"
                onClick={getMemeImage}
            >Get A New Meme Image 🖼️</button>
        </div>
        <img src={memeImage} alt="meme" className="meme-image "/>
    </main>
    )
}