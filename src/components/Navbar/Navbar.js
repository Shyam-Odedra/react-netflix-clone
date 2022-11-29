import React, { useEffect, useState } from 'react';
import netflixLogo from '../../assets/img/netflix_logo.png';
import profile from '../../assets/img/profile.png';
import './Navbar.css';

function Navbar() {

    const [bgShow, setBgShow] = useState(false);

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
       if(window.scrollY >= 80){
         setColorchange(true);
       }
       else{
         setColorchange(false);
       }
    };
    window.addEventListener('scroll', changeNavbarColor);
    // useEffect(() => {
    //     // return () => {
    //     //     window.removeEventListener('scroll');
    //     // }
    // },[window.scrollY]);


    return (
        <div className={`fixed w-full top-0 z-10 px-4 lg:px-12 py-1 navbar ` + (colorChange ? 'navBlack' : '')}>
            <div className='flex justify-between items-center'>
                <div className='flex items-center justify-start'>
                    <img className='logo w-32 cursor-pointer' src={netflixLogo} alt='netflix' />
                    <ul className='lg:flex items-center hidden'> 
                        <li className='ml-5 cursor-pointer'>Home</li>
                        <li className='ml-5 cursor-pointer'>Trending</li>
                        <li className='ml-5 cursor-pointer'>Movies</li>
                        <li className='ml-5 cursor-pointer'>TV Shows</li>
                        <li className='ml-5 cursor-pointer'>My List</li>
                        <li className='ml-5 cursor-pointer'>Browse by Categories</li>
                    </ul>
                </div>
                <div>
                    <img className='profile cursor-pointer' src={profile} alt='profile' />
                </div>
            </div>
        </div>
    )
}

export default Navbar;