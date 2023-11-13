import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { MdHelp, MdOutlineFavorite } from 'react-icons/md'
import { Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const TopNav = () => {
    const [sideNav, setSideNav] = useState(false)
    const navigate = useNavigate();
    const handleClick = async (event) => {
        navigate("/Login")

    }
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
            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={25} />
                <input className='bg-transparent p-2 w-full focus:outline-none'
                    type='text'
                    placeholder='search meals' />
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
                <AiOutlineClose onClick={() => setSideNav(!sideNav)} size={25} //Side Nav icon open/close + placement
                    className='absolute right-4 top-4 cursor-pointer'
                />
                <h2 className='text-2xl p-4'>Cook<span className='text-orange-700 font-bold'>Book</span></h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-900'>
                        <li className='text-xl py-4 flex'>
                            <BsPerson size={25} // side nav icon sizing and style
                                className='mr-4 text-white bg-black rounded-full'
                            />
                            My Account
                        </li>

                        <li className='text-xl py-4 flex'>
                            <MdOutlineFavorite size={25}
                                className='mr-4 text-white bg-black rounded-full'
                            />
                            Favorites
                        </li>
                        <li className='text-xl py-4 flex'>
                            <MdHelp size={25}
                                className='mr-4 text-white bg-black rounded-full'
                            />
                            Help
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default TopNav