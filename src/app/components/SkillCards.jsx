'use client';

import CircleProgressBar from '@/app/components/CircleProgressBar';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const cards = [
    {
        id: 1,
        icon: '/react.png',
        title: 'React',
        percentage: 85,
        links: [
            { label: 'React Transposition Cipher', url: 'https://github.com/Daniel-Freeman/react_transposition.git' },
            { label: 'React Components', url: 'https://github.com/Daniel-Freeman/react_components.git' },
            { label: 'Cash Compass', url: 'https://github.com/Daniel-Freeman/cash_compass.git' },
        ]
    },
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
                    <ChevronLeft onClick={prevCard} className='text-primary bg-white rounded-full shadow-md h-[35px] w-[35px] shadow-textMuted hover:cursor-pointer' />
                </div>
                <div className="absolute top-1/2 -right-5 -translate-y-1/2 z-10">
                    <ChevronRight onClick={nextCard} className='text-primary bg-white rounded-full shadow-md h-[35px] w-[35px] shadow-textMuted hover:cursor-pointer' />
                </div>

                {/* Card Content */}
                <div className={`w-full h-full flex flex-col text-xl space-y-4 text-center font-semibold transition-all duration-300 overflow-hidden rounded-xl bg-soft bg-opacity-80 border-2 border-color-textMuted shadow-sm shadow-textMuted transition-shadow duration-100 hover:shadow-md hover:shadow-textMuted`}>
                    <div className="flex gap-4 mx-auto items-center mt-8">
                        <Image src={cards[currentIndex].icon} alt="icon" width={45} height={45} />
                        <h1 className='text-2xl text-textPrimary'>{cards[currentIndex].title}</h1>
                    </div>
                    <CircleProgressBar percentage={cards[currentIndex].percentage}/>
                    <div className="flex flex-col space-y-2 items-center px-4">
                        <h1 className="text-xl text-textPrimary mb-1">Project Usages</h1>
                        {cards[currentIndex].links.map((link, idx) => (
                            <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">{link.label}</a>
                        ))}
                    </div>
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
