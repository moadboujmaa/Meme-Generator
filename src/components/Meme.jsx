import React from "react";
import memeData from "../memeData";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1g8my4.jpg"
    })

    function getMemeImage() {
        const memesArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return (
    <main>
        <div className="form">
            <input 
                type="text" 
                className="form-input"
                placeholder="Top Text"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
            />
            <input 
                type="text" 
                className="form-input"
                placeholder="Bottom Text"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
            /> 
            <button 
                className="form-button"
                onClick={getMemeImage}
            >Get A New Meme Image 🖼️</button>
        </div>
        <div className="meme">
            <img src={meme.randomImage} alt="meme" className="meme-image "/>
            <h2 className="meme-text top">{meme.topText}</h2>
            <h2 className="meme-text bottom">{meme.bottomText}</h2>
        </div>
    </main>
    )
}