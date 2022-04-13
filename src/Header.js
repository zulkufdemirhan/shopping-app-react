import React from 'react'
import './App.css';

export default function Header({final}) {
return (
    <div className='header'>
                
        <div className='profil'>
                <i class="fa-solid fa-user" onClick={final}></i>
                <i class="fa-solid fa-bell" className='bang fa-solid fa-bell'  ></i>
                <i class="fa-solid fa-message"></i>
            </div>
            

            <div className='middle'>
                <h2 className='home'>Home</h2>
                <h2 className='discover' > Files</h2>
                <input type="text" placeholder="Search" className='headerInput'  />
            </div>

            <div className='color'>
                <span className='green'></span>
                <span className='yellow'></span>
                <span className='red'></span>
        </div>

    </div>
)
}
