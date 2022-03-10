import React, { useState } from 'react';
import memesData from '../memesData';

export const Meme = ()=>{
    /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */
    //  const [memeImage, setMemeImage] = useState('');
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage:'http://i.imgflip.com/1bij.jpg'
                // randomImage:memesData.data.memes[Math.floor(Math.random() * memesData.data.memes.length)].url

    });

    const [allMemeImages, setAllMemeImages] = useState(memesData);


     

    function getMemeImage (){

        
        const memesArray = [...memesData.data.memes]
        const index = Math.floor(Math.random() * memesArray.length);
        const {url} = memesArray[index];

        setMeme({...meme,randomImage:url }); 
        console.log(meme)

    }

        
    
    



    return (

        <main>   
            <div className='form'>
                <input 
                    className='form--input' 
                    type='text'
                    placeholder='Top text'
                />
                <input 
                    className='form--input' 
                    type='text'
                    placeholder='Bottom text'
                />
                <button type='submit' 
                    className='form--button'
                    onClick={getMemeImage}
                >
                    Get a new meme image
                </button>
                
            </div>
            <img src={meme.randomImage} className='meme--image' alt='alt-img'/>
        </main>
    )
}