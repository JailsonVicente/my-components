import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

export default function Slider() {

    const slides = [
        {
            url: "https://images.unsplash.com/photo-1539136831565-c85f368448a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"
        },
        {
            url: "https://images.unsplash.com/photo-1559556620-c9a399e5b1f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"
        },
        {
            url: "https://images.unsplash.com/photo-1602338681424-e148ee1cc7f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"
        },
        {
            url: "https://images.unsplash.com/photo-1509936115261-e7b3e4ee468d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"
        },
        {
            url: "https://images.unsplash.com/photo-1527956041665-d7a1b380c460?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUyfHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex: any) => {
        setCurrentIndex(slideIndex);
    }

    return (
        <div className={`
            max-w-[1400px] h-[90vh] w-full m-auto p16 px-4 relative
            group 
        `}>
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='w-full h-full rounde-2xl bg-center bg-cover duration-500'>
            </div>
            <div className={`
                hidden group-hover:block
                absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 cursor-pointer
            `}>
                <BsChevronCompactLeft size={30} onClick={prevSlide} />
            </div>
            <div className={`
                hidden group-hover:block
                absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 cursor-pointer
            `}>
                <BsChevronCompactRight size={30} onClick={nextSlide} />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className=''>
                        <input type="radio" id={`radio-${slideIndex}`} checked={currentIndex === slideIndex} readOnly className="" />
                        <label htmlFor={`radio-${slideIndex}`} className=""></label>

                        {/* specify in the global CSS a custom design of the radio button */}
                        
                    </div>
                ))}
            </div>
        </div>
    )
}