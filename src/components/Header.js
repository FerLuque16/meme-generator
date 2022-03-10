import React from 'react';

export const Header = ()=>{
    return (
        <header className='header'>
            <img src='/images/troll-face.png' className='header--image' alt='header-img'/>
            <h1 className='header--title'>Meme Generator</h1>
            <p className='header--text'>React Course - Project 3</p>
        </header>

    )
}