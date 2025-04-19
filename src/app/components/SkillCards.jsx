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
        title: 'HTML5',
        percentage: 100,
        links: [
            { label: 'First Portfolio', url: 'https://github.com/DanielFreeman068/Portfolio.git' },
            { label: 'Summer Site', url: 'https://github.com/DanielFreeman068/summberSite.git' },
            { label: 'Jquery Maze Game', url: 'https://github.com/DanielFreeman068/jquery_maze_game.git' },
        ]
    },
    {
        id: 3,
        icon: '/icons/css.png',
        title: 'CSS',
        percentage: 95,
        links: [
            { label: 'Pet Adoption Platform', url: 'https://github.com/DanielFreeman068/Pet-Adoption-Platform.git' },
            { label: 'Event Registration Platform', url: 'https://github.com/DanielFreeman068/EJS--Event-Registration.git' },
            { label: 'Jolt Mobile App', url: 'https://github.com/DanielFreeman068/fbla-mad-cordova-nationals.git' },
        ]
    },
    {
        id: 4,
        icon: '/icons/js.png',
        title: 'JavaScript',
        percentage: 90,
        links: [
            { label: 'JQuery Maze Game', url: 'https://github.com/DanielFreeman068/jquery-maze.git' },
            { label: 'Tic Tac Toe', url: 'https://github.com/DanielFreeman068/TicTacToe.git' },
            { label: 'Jolt Mobile App', url: 'https://github.com/DanielFreeman068/fbla-mad-cordova-nationals.git' },
        ]
    },
    {
        id: 5,
        icon: '/icons/python.png',
        title: 'Python',
        percentage: 80,
        links: [
            { label: 'File Manipulation', url: 'https://github.com/DanielFreeman068/File-Manipulator.git' },
        ]
    },
    {
        id: 6,
        icon: '/icons/typescript.png',
        title: 'Typescript',
        percentage: 35,
        links: [
            { label: 'Typescript Mini Projects', url: 'https://github.com/DanielFreeman068/typescript.git' },
        ]
    },
    {
        id: 7,
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
        id: 8,
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
        id: 9,
        icon: '/icons/ejs.png',
        title: 'EJS',
        percentage: 95,
        links: [
            { label: 'Pet Adoption Platform', url: 'https://github.com/DanielFreeman068/Pet-Adoption-Platform.git' },
            { label: 'Event Registration Platform', url: 'https://github.com/DanielFreeman068/EJS--Event-Registration.git' },
        ]
    },
    {
        id: 10,
        icon: '/icons/next.png',
        title: 'NextJS',
        percentage: 75,
        links: [
            { label: 'Recreation of First Portfolio', url: 'https://github.com/DanielFreeman068/next_portfolio.git' },
            { label: 'Pokemon API Data Fetcher', url: 'https://github.com/DanielFreeman068/next_data_fetching.git' },
            { label: 'My Portfolio (This Portfolio)', url: 'https://github.com/DanielFreeman068/freeman_portfolio.git' },
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
            <div className="relative w-[300px] h-[465px] shadow-lg rounded-xl">
                {/* Arrows */}
                <div className="absolute top-1/2 -left-5 -translate-y-1/2 z-10">
                    <ChevronLeft onClick={prevCard} className='text-primary bg-white rounded-full shadow-md h-[35px] w-[35px] duration-100 transition-shadow hover:shadow-textMuted hover:shadow-md hover:cursor-pointer' />
                </div>
                <div className="absolute top-1/2 -right-5 -translate-y-1/2 z-10">
                    <ChevronRight onClick={nextCard} className='text-primary bg-white rounded-full shadow-md h-[35px] w-[35px] duration-100 transition-shadow hover:shadow-textMuted hover:shadow-md hover:cursor-pointer' />
                </div>

                {/* Card Content */}
                <div className={`w-full h-full flex flex-col text-xl space-y-4 text-center font-semibold overflow-hidden rounded-xl bg-soft bg-opacity-80 border-2 border-color-textMuted transition-shadow duration-100 hover:shadow-md hover:shadow-textMuted`}>
                    <div className="flex gap-4 mx-auto items-center mt-8">
                        <Image src={cards[currentIndex].icon} alt="icon" width={45} height={45} />
                        <h1 className='text-2xl text-textPrimary'>{cards[currentIndex].title}</h1>
                    </div>
                    <CircleProgressBar percentage={cards[currentIndex].percentage}/>
                    <div className="flex flex-col space-y-2 items-center px-4">
                        <h1 className="text-xl text-textPrimary mb-1">Project Usages</h1>
                        {cards[currentIndex].links.map((link, idx) => (
                            <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm text-links hover:underline">{link.label}</a>
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
