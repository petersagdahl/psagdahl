import React from 'react'
import { GrStatusWarning } from "react-icons/gr";
import {motion} from "framer-motion";

import Logo from "./img/Camera.ico";
import Avatar from "./img/User.ico";
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='fixed z-50 w-screen p-6 px-16'>
        {/*desltop and tablet*/}
        <div className='hidden md:flex w-full h-full items-center justify-between' > 
            <Link to="/" className='flex items-center gap-2'>
                <img src={Logo} className="w-8 object-cover" alt="Logo"/>
                <p className='text-headingColor text-xl font-bold'>Peter Sagdahl</p>
            </Link>
            <div className='flex items-center gap-8'>
                <ul className='flex items-center ml-auto gap-8'> 
                    <li className='text-base text-textColor hover text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
                    <li className='text-base text-textColor hover text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Meny</li>
                    <li className='text-base text-textColor hover text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Om</li>
                    <li className='text-base text-textColor hover text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Prosjekter</li>
                    <li className='text-base text-textColor hover text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Skamløs Selvrealisering</li>
                    <li className='text-base text-textColor hover text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Kreativt Arbeid</li>
                </ul>
                <div className='relative flex items-center justify-center'>
                    <GrStatusWarning className='text-textcolor text-2xl ml-8 cursor-pointer'/>
                    <div className=' absolute -top-1 -right-4 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                        <p className='text-xs text-white font-semibold'>2</p>
                    </div>
                </div>
                    <motion.img 
                        whileTap={{ scale: 0.6}}
                        src={Avatar} 
                        className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer" 
                        alt="userprofile"/>
            </div>
        </div>

        {/*mobile*/}
        <div className='flex md:hidden w-full h-full'></div>

    
    </header>
  )
}

export default Header
