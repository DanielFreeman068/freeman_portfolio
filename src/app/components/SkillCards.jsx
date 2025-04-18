'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const cards = [
    { id: 1, content: 'Card 1'},
    { id: 2, content: 'Card 2'},
    { id: 3, content: 'Card 3'},
    ];

    export default function CardCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevCard = () => {
        setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
    };

    const nextCard = () => {
        setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="flex flex-col items-center">
            <div className="relative w-[300px] h-[465px] shadow-lg rounded-xl">
                {/* Arrows */}
                <div className="absolute top-1/2 -left-5 -translate-y-1/2 z-10">
                    <ChevronLeft onClick={prevCard} className='text-black bg-white rounded-full shadow-md h-[35px] w-[35px] shadow-textMuted hover:cursor-pointer' />
                </div>
                <div className="absolute top-1/2 -right-5 -translate-y-1/2 z-10">
                    <ChevronRight onClick={nextCard} className='text-black bg-white rounded-full shadow-md h-[35px] w-[35px] shadow-textMuted hover:cursor-pointer' />
                </div>

                {/* Card Content */}
                <div className={`w-full h-full flex items-center justify-center text-xl font-semibold transition-all duration-300 overflow-hidden rounded-xl bg-soft bg-opacity-80 border-2 border-color-textMuted shadow-sm shadow-textMuted transition-shadow duration-300 hover:shadow-md hover:shadow-textMuted`}>
                    {cards[currentIndex].content}
                </div>
            </div>

            {/* Dots */}
            <div className="mt-4 flex space-x-2">
                {cards.map((_, idx) => (
                <span key={idx} className={`w-3 h-3 rounded-full transition-colors duration-200 bg-textPrimary ${ currentIndex === idx ? 'opacity-100' : 'opacity-20'}`}/>
                ))}
            </div>
        </div>
    );
}
