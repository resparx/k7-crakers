'use client'

import { useState, useEffect } from 'react';

const HeroCarousel = ({ items, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1 + items.length) % items.length
        );
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, interval);
        return () => clearInterval(timer);
    }, [currentIndex, interval]);

    return (
        <div className="mt-20 relative w-full overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {items.map((item, index) => (
                    <div key={index} className="flex-shrink-0 w-full h-[300px] md:h-[400px] lg:h-[400px]">
                        <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none"
            >
                &lt;
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none"
            >
                &gt;
            </button>
        </div>
    );
};

export default HeroCarousel;
