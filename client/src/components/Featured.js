import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const Featured = () => {
    const sliders = [
        // Array of photos
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
        },
    ]
    const [currentIndex, setCurrentIndex] = useState(0) //initial index = 0 to return first image 
    // Move to previous slider
    const prevSlider = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    // Move to next slider
    const nextSlider = () => {
        const isLastSlide = currentIndex === sliders.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }
    //move to slider by index
    const moveToNextSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className='max-w-[1520px] h-[500px] w-full py-4 px-4 relative group'>
            {/* Displaying current slider image */}
            <div className='w-full h-full rounded-2l bg-center bg-cover duration-500'
                style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
            ></div>

            {/* Left arrow for moving to previous slider */}
            <div className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer '>
                <BsChevronCompactLeft onClick={prevSlider} />
            </div>

            {/* Right arrow for moving to next slider */}
            <div className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer '>
                <BsChevronCompactRight onClick={nextSlider} />
            </div>

            {/* Navigation dots for each slider */}
            <div className='flex top-4 justify-center py-2'>
                {
                    sliders.map((sliderItems, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => moveToNextSlide(slideIndex)}
                            className='text-2xl cursor-pointer' >
                            <RxDotFilled />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Featured