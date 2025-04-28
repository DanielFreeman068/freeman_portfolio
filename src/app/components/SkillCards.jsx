'use client';

import CircleProgressBar from '@/app/components/CircleProgressBar';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const cards = [
    {
        id: 1,
        icon: '/icons/react.png',
        title: 'React',
        percentage: 85,
        links: [
            { label: 'React Transposition Cipher', url: 'https://github.com/DanielFreeman068/react_transposition.git' },
            { label: 'React Components', url: 'https://github.com/DanielFreeman068/react_components.git' },
            { label: 'Cash Compass', url: 'https://github.com/DanielFreeman068/fbla_cash_compass.git' },
        ]
    },
    {
        id: 2,
        icon: '/icons/html.png',
        title: 'HTML5 & XHTML',
        percentage: 100,
        links: [
            { label: 'Pet Adoption Platform', url: 'https://github.com/DanielFreeman068/Pet-Adoption-Platform.git' },
            { label: 'Event Registration Platform', url: 'https://github.com/DanielFreeman068/EJS--Event-Registration.git' },
            { label: 'Jolt Mobile App', url: 'https://github.com/DanielFreeman068/fbla-mad-cordova-nationals.git' },
        ]
    },
    {
        id: 3,
        icon: '/icons/css.png',
        title: 'CSS',
        percentage: 95,
        links: [
            { label: 'Pet Adoption Platform', url: 'https://github.com/DanielFreeman068/Pet-Adoption-Platform.git' },
            { label: 'React Blog', url: 'https://github.com/DanielFreeman068/react_blog' },
            { label: 'Jolt Mobile App', url: 'https://github.com/DanielFreeman068/fbla-mad-cordova-nationals.git' },
        ]
    },
    {
        id: 4,
        icon: '/icons/js.png',
        title: 'JavaScript',
        percentage: 90,
        links: [
            { label: 'JQuery Maze Game', url: 'https://github.com/DanielFreeman068/jquery_maze_game.git' },
            { label: 'Tic Tac Toe', url: 'https://github.com/DanielFreeman068/TicTacToe.git' },
            { label: 'Jolt Mobile App', url: 'https://github.com/DanielFreeman068/fbla-mad-cordova-nationals.git' },
        ]
    },
    {
        id: 5,
        icon: '/icons/node-js.png',
        title: 'Node',
        percentage: 85,
        links: [
            { label: 'Pet Adoption Platform', url: 'https://github.com/DanielFreeman068/Pet-Adoption-Platform.git' },
            { label: 'Event Registration Platform', url: 'https://github.com/DanielFreeman068/EJS--Event-Registration.git' },
            { label: 'Cash Compass', url: 'https://github.com/DanielFreeman068/fbla_cash_compass.git' },
        ]
    },
    {
        id: 6,
        icon: '/icons/mongodb.png',
        title: 'MongoDB',
        percentage: 90,
        links: [
            { label: 'Pet Adoption Platform', url: 'https://github.com/DanielFreeman068/Pet-Adoption-Platform.git' },
            { label: 'Jolt Mobile App', url: 'https://github.com/DanielFreeman068/fbla-mad-cordova-nationals.git' },
            { label: 'Cash Compass', url: 'https://github.com/DanielFreeman068/fbla_cash_compass.git' },
        ]
    },
    {
        id: 7,
        icon: '/icons/tailwind.svg',
        title: 'Tailwind',
        percentage: 95,
        links: [
            { label: 'Cash Compass', url: 'https://github.com/DanielFreeman068/fbla_cash_compass.git' },
            { label: 'Boy Scout 747', url: 'https://github.com/RenLevingar/boy_scout_747.git' },
            { label: 'My Portfolio (This Portfolio)', url: 'https://github.com/DanielFreeman068/freeman_portfolio.git' },
        ]
    },
    {
        id: 8,
        icon: '/icons/next.png',
        title: 'NextJS',
        percentage: 75,
        links: [
            { label: 'Recreation of First Portfolio', url: 'https://github.com/DanielFreeman068/next_portfolio.git' },
            { label: 'Pokemon API Data Fetcher', url: 'https://github.com/DanielFreeman068/next_data_fetching.git' },
            { label: 'My Portfolio (This Portfolio)', url: 'https://github.com/DanielFreeman068/freeman_portfolio.git' },
        ]
    },
    {
        id: 9,
        icon: '/icons/python.png',
        title: 'Python',
        percentage: 80,
        links: [
            { label: 'File Manipulation', url: 'https://github.com/DanielFreeman068/File-Manipulator.git' },
        ]
    },
    {
        id: 10,
        icon: '/icons/typescript.png',
        title: 'Typescript',
        percentage: 35,
        links: [
            { label: 'Typescript Mini Projects', url: 'https://github.com/DanielFreeman068/typescript.git' },
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
        <div data-aos="fade-up" className="flex flex-col items-center">
            <div className="relative w-full lg:w-[300px] h-[465px] sm:h-[300px] lg:min-h-[530px] shadow-lg rounded-xl">
                {/* Arrows */}
                <div className="absolute top-1/2 -left-5 -translate-y-1/2 z-10">
                    <ChevronLeft onClick={prevCard} className='text-primary bg-white rounded-full shadow-md h-[35px] w-[35px] duration-100 transition-shadow hover:shadow-textMuted hover:shadow-md hover:cursor-pointer' />
                </div>
                <div className="absolute top-1/2 -right-5 -translate-y-1/2 z-10">
                    <ChevronRight onClick={nextCard} className='text-primary bg-white rounded-full shadow-md h-[35px] w-[35px] duration-100 transition-shadow hover:shadow-textMuted hover:shadow-md hover:cursor-pointer' />
                </div>

                {/* Card Content */}
                <div className="w-full h-full flex flex-col sm:flex-row lg:flex-col items-center justify-center text-xl overflow-hidden rounded-xl bg-soft bg-opacity-80 border-2 border-color-textMuted transition-shadow duration-100 hover:shadow-md hover:shadow-textMuted">

                    {/* lg+ content */}
                    <div className="flex sm:hidden lg:flex flex-col space-y-4 text-center font-semibold w-full">
                        <div className="flex gap-4 mx-auto items-center">
                            <Image src={cards[currentIndex].icon} alt="icon" width={45} height={45} />
                            <h1 className="text-2xl text-textPrimary">{cards[currentIndex].title}</h1>
                        </div>
                    </div>

                    {/* WIDE CONTENT */}
                    <div className="hidden sm:flex lg:hidden flex-col space-y-4 text-center font-semibold w-1/2">
                        <div className="flex gap-4 mx-auto items-center">
                            <Image src={cards[currentIndex].icon} alt="icon" width={45} height={45} />
                            <h1 className="text-2xl text-textPrimary">{cards[currentIndex].title}</h1>
                        </div>

                        <div className="flex flex-col space-y-2 items-center">
                            <h1 className="text-xl text-textPrimary my-2">Project Usages</h1>
                            {cards[currentIndex].links.map((link, idx) => (
                                <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm text-links hover:underline">
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Always visible */}
                    <div className="mt-4 w-1/2">
                        <CircleProgressBar percentage={cards[currentIndex].percentage} />
                    </div>

                    {/* lg+ content */}
                    <div className="flex sm:hidden lg:flex flex-col space-y-4 text-center font-semibold w-full">

                        <div className="flex flex-col space-y-2 items-center px-4">
                            <h1 className="text-xl text-textPrimary mb-1">Project Usages</h1>
                            {cards[currentIndex].links.map((link, idx) => (
                                <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm text-links hover:underline">
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* dots */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                    {cards.map((_, idx) => (
                        <span
                            key={idx}
                            className={`w-3 h-3 rounded-full transition-colors duration-200 bg-textPrimary ${
                                currentIndex === idx ? 'opacity-100' : 'opacity-20'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
