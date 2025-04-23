"use client"
import { useState, useEffect } from 'react';

export default function SvgHexagonNav() {
    const [activeSection, setActiveSection] = useState('about');
    
    //use effect with function to check where user is at pixel wise from the top of the screen in order to identify which section the user is currently on
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;
            
            const aboutSection = document.getElementById('about');
            const experienceSection = document.getElementById('experience');
            const projectsSection = document.getElementById('projects');
            
            if (aboutSection && scrollPosition < aboutSection.offsetTop + aboutSection.offsetHeight) {
                setActiveSection('about');
            } else if (experienceSection && scrollPosition >= experienceSection.offsetTop && scrollPosition < experienceSection.offsetTop + experienceSection.offsetHeight) {
                setActiveSection('experience');
            } else if (projectsSection && scrollPosition >= projectsSection.offsetTop) {
                setActiveSection('projects');
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    //function for user to click or tap and go smoothly to specified section
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
        });
        }
    };
    
    const NavItem = ({ id, isActive, label }) => {
        // SVG dimensions
        const width = 40;
        const height = 34;
        const innerWidth = 30;
        const innerHeight = 24;
        
        return (
            <div className="flex flex-col items-center">
                <div className="relative h-10 flex items-center justify-center cursor-pointer"
                    onClick={() => scrollToSection(id)}>
                {/* outer hexagon */}
                <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                    d={`M10 0 L${width - 10} 0 L${width} ${height/2} L${width - 10} ${height} L10 ${height} L0 ${height/2} Z`} 
                    stroke="white" 
                    strokeWidth="2" 
                    fill="none" 
                    />
                </svg>
                
                {/* inner hexagon */}
                {isActive && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <svg width={innerWidth} height={innerHeight} viewBox={`0 0 ${innerWidth} ${innerHeight}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path 
                            d={`M7 0 L${innerWidth - 7} 0 L${innerWidth} ${innerHeight/2} L${innerWidth - 7} ${innerHeight} L7 ${innerHeight} L0 ${innerHeight/2} Z`} 
                            fill="white" 
                            />
                        </svg>
                    </div>
                )}
                
                {/* connection lines */}
                {id === 'about' && (
                    <div className="absolute top-1/2 -translate-y-1/2 right-0 w-20 h-0.5 bg-white translate-x-full"></div>
                )}
                
                {id === 'experience' && (
                    <>
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 w-20 h-0.5 bg-white -translate-x-full"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 right-0 w-20 h-0.5 bg-white translate-x-full"></div>
                    </>
                )}
                
                {id === 'projects' && (
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 w-20 h-0.5 bg-white -translate-x-full"></div>
                )}
                </div>

                {isActive && (
                    <span className="mt-4 text-sm text-textPrimary font-semibold">{label}</span>
                )}

                {!isActive && (
                    <span className="mt-4 text-sm text-textSecondary font-medium">{label}</span>
                )}
            </div>
        );
    };
    
    return (
        <div className="fixed top-0 left-0 right-0 z-10 flex flex-col items-center py-6 bg-accentDark bg-opacity-80">
            <div className="flex items-center justify-center space-x-16 py-2">
                <NavItem 
                    id="about" 
                    isActive={activeSection === 'about'} 
                    label="About Me"
                />
                
                <NavItem 
                    id="experience" 
                    isActive={activeSection === 'experience'} 
                    label="Experience"
                />
                
                <NavItem 
                    id="projects" 
                    isActive={activeSection === 'projects'} 
                    label="Projects"
                />
            </div>
        </div>
    );
}