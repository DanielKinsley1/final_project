import React from 'react'
import { topPicks } from '../data/data';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const TopPicks = () => {
    return (
        <div>
            {/* Section title for top picks */}
            <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>TopPicks</h1>
            {/* Container for displaying top picks (hidden on small screens) */}
            <div className='hidden lg:flex max-w[1520px] m-auto py-2 px-2'>
                {/* Splide component for creating a carousel */}
                <Splide options={{ perPage: 4, gap: "0.5rem", drag: 'free', arrows: false }}>
                    {/* Mapping through topPicks data to create SplideSlides */}
                    {
                        topPicks.map((item) => {
                            return (
                                <SplideSlide key={item.id}>
                                    {/* Individual slide content */}
                                    <div className='rounded-3xl relative'>
                                        {/* Overlay with item details */}
                                        <div className='absolute w-full h-full bg-black/50 rounded-3xl text-white'>
                                            <p className='px-2 pt-4 font-bold text-2xl'>{item.title}</p>
                                            <p className='px-2'>{item.price}</p>

                                        </div>
                                        {/* Image of the item */}
                                        <img className='h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300'
                                            src={item.img}
                                            alt={item.title}
                                        />
                                    </div>
                                </SplideSlide>
                            )
                        })
                    }
                </Splide>
            </div>
        </div>
    )
};

export default TopPicks