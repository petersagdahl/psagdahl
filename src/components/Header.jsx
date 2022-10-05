import React, { useState } from 'react'
import { GrStatusWarning } from "react-icons/gr";
import { MdAdd, MdLogout } from "react-icons/md";
import {motion} from "framer-motion";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';

import Logo from "../img/Camera.ico";
import Avatar from "../img/User.ico";
import { Link } from 'react-router-dom';
import { useStateValue } from '../Context/StateProvider';
import { actionType } from '../Context/reducer';

export const Header = () => {

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{user}, dispatch] = useStateValue();

    const [isMenu, setIsMenu] = useState(false);

const login = async () => {
    if(!user) {
        const {user : {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider)
    dispatch({
        type : actionType.SET_USER,
        user : providerData[0],
    });

    localStorage.setItem('user', JSON.stringify(providerData[0]));
    } else {
        setIsMenu(!isMenu);
    }

};

    const logout = () => {
        setIsMenu(false)
        localStorage.clear()

        dispatch({
            type : actionType.SET_USER,
            user : null,
        })
    }

  return (
    <header className='fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary'>
        {/*desltop and tablet*/}
        <div className='hidden md:flex w-full h-full items-center justify-between' > 
            <Link to="/" className='flex items-center gap-2'>
                <img src={Logo} className="w-8 object-cover" alt="Logo"/>
                <p className='text-headingColor text-xl font-bold'>Peter Sagdahl</p>
            </Link>
            <div className='flex items-center gap-8'>
                <motion.ul 
                initial={{opacity : 0, x : 200}}
                animate={{opacity : 1, x : 0}} 
                exit={{opacity : 0, x : 200}} 
                className='flex items-center ml-auto gap-8'> 
                    <li className='text-base text-textColor hover text-headingColor duration-100 
                    transition-all ease-in-out cursor-pointer'>
                        Home
                        </li>
                    <li className='text-base text-textColor hover text-headingColor duration-100 
                    transition-all ease-in-out cursor-pointer'>
                        Meny
                        </li>
                    <li className='text-base text-textColor hover text-headingColor duration-100 
                    transition-all ease-in-out cursor-pointer'>
                        Om
                        </li>
                    <li className='text-base text-textColor hover text-headingColor duration-100 
                    transition-all ease-in-out cursor-pointer'>
                        Prosjekter
                        </li>
                    <li className='text-base text-textColor hover text-headingColor duration-100 
                    transition-all ease-in-out cursor-pointer'>
                        Skamløs Selvrealisering
                        </li>
                    <li className='text-base text-textColor hover text-headingColor duration-100 
                    transition-all ease-in-out cursor-pointer'>
                        Kreativt Arbeid
                        </li>
                </motion.ul>
                <div className='relative flex items-center justify-center'>
                    <GrStatusWarning className='text-textcolor text-2xl ml-8 cursor-pointer'/>
                    <div className=' absolute -top-1 -right-4 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                        <p className='text-xs text-white font-semibold'>2</p>
                    </div>
                </div>
                    <div className='relative'>
                        <motion.img 
                            whileTap={{ scale: 0.6}}
                            src={user ? user.photoURL : Avatar} 
                            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full" 
                            alt="userprofile"
                            onClick={login}
                            />
                            {
                                isMenu && (
                                    <motion.div 
                                    initial= {{opacity : 0, scale : 0.6}}
                                    animate= {{opacity : 1, scale : 1}}
                                    exit= {{opacity : 0, scale : 0.6}} 
                                    className='w-40 bg-gray-50 shadow-xl rounded-lg felx-col absolute top-2 right-4 top-12'>
                                {
                                    user && user.email === "peter.sagdahl@gmail.com" &&
                                    (<Link to={"/createItem"}><p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 
                                    transition-all duration-100 ease-in-out text-textColor text-base'>New Item <MdAdd/></p></Link>
                                )}
                                <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 
                                transition-all duration-100 ease-in-out text-textColor text-base'
                                onClick={logout}
                                >Logout <MdLogout/></p>


                            </motion.div>
                                )
                            }
                            
                    </div>
            </div>
        </div>

        {/*mobile*/}
        <div className='flex item-center  justify-between md:hidden w-full h-full'>
            

            <div className='relative flex items-center justify-center'>
                    <GrStatusWarning className='text-textcolor text-2xl ml-8 cursor-pointer'/>
                    <div className=' absolute -top-1 -right-4 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                        <p className='text-xs text-white font-semibold'>2</p>
                    </div>
                </div>
            <Link to="/" className='flex items-center gap-2'>
                <img src={Logo} className="w-8 object-cover" alt="Logo"/>
                <p className='text-headingColor text-xl font-bold'>Peter Sagdahl</p>
            </Link>

            <div className='relative'>
                <motion.img 
                    whileTap={{ scale: 0.6}}
                    src={user ? user.photoURL : Avatar} 
                    className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full" 
                    alt="userprofile"
                    onClick={login}
                    />
                    {
                        isMenu && (
                            <motion.div 
                            initial= {{opacity : 0, scale : 0.6}}
                            animate= {{opacity : 1, scale : 1}}
                            exit= {{opacity : 0, scale : 0.6}} 
                            className='w-40 bg-gray-50 shadow-xl rounded-lg felx-col absolute top-2 right-4 top-12'>
                        {
                            user && user.email === "peter.sagdahl@gmail.com" &&
                            (<Link to={"/createItem"}><p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 
                            transition-all duration-100 ease-in-out text-textColor text-base'>New Item <MdAdd/></p></Link>
                        )}

                        <ul 
                        className='flex flex-col ml-auto'> 
                            <li className='text-base text-textColor hover text-headingColor duration-100 
                            transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2'>
                                Home
                                </li>
                            <li className='text-base text-textColor hover text-headingColor duration-100 
                            transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2'>
                                Meny
                                </li>
                            <li className='text-base text-textColor hover text-headingColor duration-100 
                            transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2'>
                                Om
                                </li>
                            <li className='text-base text-textColor hover text-headingColor duration-100 
                            transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2'>
                                Prosjekter
                                </li>
                            <li className='text-base text-textColor hover text-headingColor duration-100 
                            transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2'>
                                Skamløs Selvrealisering
                                </li>
                            <li className='text-base text-textColor hover text-headingColor duration-100 
                            transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2'>
                                Kreativt Arbeid
                                </li>
                        </ul>

                        <p className='m-2 p-2 rounded-md shadow-md flex items-center 
                        justify-center bg-gray-200 gap-3 cursor-pointer 
                        hover:bg-slate-300 transition-all duration-100 ease-in-out 
                        text-textColor text-base'
                        onClick={logout}
                        >
                            Logout <MdLogout/></p>


                    </motion.div>
                        )
                    }
                            
                    </div>
        </div>

    
    </header>
  )
}

export default Header
