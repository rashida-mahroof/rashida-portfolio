
"use client"

import img from '../../../public/img.JPG';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

interface MenuItem {
    icon: string;
    label: string;
    id: string;
}

const menuItems: MenuItem[] = [
    { icon: '💡', label: 'Home', id: 'home' },
    { icon: '👤', label: 'About', id: 'about' },
    { icon: '🛠️', label: 'Skills', id: 'skills' },
    { icon: '💼', label: 'Experince', id: 'experience' },
    { icon: '🖼️', label: 'Portfolio', id: 'portfolio' },

    { icon: '📞', label: 'Contact', id: 'contact' },
    // { icon: '📝', label: 'Blog', id: 'blog' },
];


export default function Header() {

    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = menuItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(menuItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: any) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header id="home" className=" text-white min-h-screen flex items-center relative">
            <div className="container mx-auto px-4 py-12 lg:py-0 flex flex-col lg:flex-row items-center justify-between">
                <div className="lg:w-1/3 mb-8 lg:mb-0 relative w-full max-w-sm group">
                    {/* Background card */}
                    <div className="absolute top-0 left-0 w-full h-full bg-yellow-400 transform -rotate-6 transition-all duration-300 group-hover:rotate-0 group-hover:scale-105"></div>

                    {/* Image wrapper */}
                    <div className="relative z-10 overflow-hidden rounded-lg">
                        <Image
                            src={img}
                            alt="Rashida"
                            width={400}
                            height={400}
                            className="rounded-lg w-full h-auto transition-transform duration-300 group-hover:scale-110"
                        />

                       

                        
                    </div>
                </div>
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">I'M <span className='text-yellow-400'>Rashida Mahroof.</span></h1>
                    <Typewriter
                        options={{
                            strings: ['Mobile App Developer', 'Web Developer', 'Cross-platform Developer', 'Grahic Designer','Photographer', 'API Developer', 'Full Stack Developer','AI Enthusiasist'],
                            autoStart: true,
                            loop: true,
                            
                        }}
                    />
                    {/* <h2 className="text-xl md:text-2xl mb-6">Web & Mobile App Developer</h2> */}
                    <p className="mb-8 max-w-md mx-auto lg:mx-0 text-sm md:text-base">
                        Passionate about crafting seamless digital experiences. Specializing in full-stack web development and cross-platform mobile applications.
                    </p>
                    <button onClick={()=>scrollToSection('about')}  className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition duration-300 uppercase tracking-wider text-sm md:text-base">
                         More About Me
                    </button>
                </div>
            </div>

            {/* Vertical Navigation Menu */}
            <nav className="fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col space-y-4 z-50">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center text-base md:text-xl ${activeSection === item.id ? 'bg-yellow-400 text-black' : 'bg-gray-800 text-white'
                            } hover:bg-yellow-300 hover:text-black transition duration-300`}
                        title={item.label}
                    >
                        {item.icon}
                    </button>
                ))}
            </nav>
        </header>
    );
}