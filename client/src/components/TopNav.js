import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { loggedInUser } from '../App'



const TopNav = () => {
    // Visibility of side nav
    const [sideNav, setSideNav] = useState(false)
    const navigate = useNavigate();
    const handleClick = async (event) => {
        navigate("/Login")
    }

    const handleLogout = (event) => {
        localStorage.clear();
        window.location.reload();
    }
    // Rendering component if based on user login
    if (loggedInUser) {
        return (
            <div className='max-w-[1520px] mx-auto flex justify-between items-center p-4'>
                {/* Left side of the navigation bar */}
                <div className='flex items-center'>
                    <div onClick={() => setSideNav(!sideNav)} className='cursor-pointer'>
                        <AiOutlineMenu size={25} /> {/* Hamburger menu icon */}
                    </div>
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl p-2'>Cook
                        <span className='font-bold'>Book</span>
                    </h1>
                    <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                        <p className='bg-orange-700 text-white rounded-full p-2 text-bold'>Free</p>
                        <p className='p-2 text-bold'>Recipies</p>
                    </div>
                </div>
                {/* Logout button for logged-in users */}
                <button className='bg-orange-700 text-white hidden md:flex items-center py-2 rounded-full' type="submit" onClick={handleLogout}> {/* Login button and styling  */}
                    Logout
                </button>
                {/* Overlay for the side navigation */}
                {sideNav ? (
                    <div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0'
                        onClick={() => setSideNav(!sideNav)} // onclick of background hide sidenav
                    ></div>
                ) : ("")
                }
                {/* Side navigation content */}
                <div className={sideNav
                    ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'
                    : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
                }
                >
                    <AiOutlineClose onClick={() => setSideNav(!sideNav)} size={25} //Side Nav icon open/close + placement
                        className='absolute right-4 top-4 cursor-pointer'
                    />
                    <h2 className='text-2xl p-4'>Cook<span className='text-orange-700 font-bold'>Book</span></h2>
                    <nav>
                        {/* Navigation links */}
                        <ul className='flex flex-col p-4 text-gray-900'>
                            <li className='text-xl py-4 flex'>
                                <a href="/MyAccount">
                                    <BsPerson size={25}
                                        className='mr-4 text-white bg-black rounded-full'
                                    />
                                    My Account
                                </a>
                            </li>

                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
    else {
        // Rendering for users who are not logged in
        return (
            ///width, margin, display flex,
            <div className='max-w-[1520px] mx-auto flex justify-between items-center p-4'>
                <div className='flex items-center'>
                    <div onClick={() => setSideNav(!sideNav)} className='cursor-pointer'>
                        <AiOutlineMenu size={25} />
                    </div>
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl p-2'>Cook
                        <span className='font-bold'>Book</span>
                    </h1>
                    <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                        <p className='bg-orange-700 text-white rounded-full p-2 text-bold'>Free</p>
                        <p className='p-2 text-bold'>Recipies</p>
                    </div>
                </div>

                <button className='bg-orange-700 text-white hidden md:flex items-center py-2 rounded-full' type="submit" onClick={handleClick}> {/* Login button and styling  */}
                    Login
                </button>
                {
                    sideNav ? (
                        <div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0'
                            onClick={() => setSideNav(!sideNav)} // onclick of background hide sidenav
                        ></div>
                    ) : ("")
                }
                <div className={sideNav
                    ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'
                    : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
                }
                >
                    <AiOutlineClose onClick={() => setSideNav(!sideNav)} size={25}
                        className='absolute right-4 top-4 cursor-pointer'
                    />
                    <h2 className='text-2xl p-4'>Cook<span className='text-orange-700 font-bold'>Book</span></h2>
                    <nav>
                        {/* Navigation links */}
                        <ul className='flex flex-col p-4 text-gray-900'>
                            <li className='text-xl py-4 flex'>
                                <a href="/MyAccount">
                                    <BsPerson size={25}
                                        className='mr-4 text-white bg-black rounded-full'
                                    />
                                    My Account
                                </a>
                            </li>


                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default TopNav