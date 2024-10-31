
"use client"

import img from '../../../public/mee.jpeg';
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
            <div className="container mx-auto px-4 py-8 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
      <div className="lg:w-1/4 relative group">
        {/* Decorative background circle */}
        <div className="absolute -inset-2 bg-yellow-400 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-300"></div>
        
        {/* Rotating background */}
        <div className="absolute top-0 left-0 w-full h-full bg-yellow-400 rounded-full transform -rotate-6 transition-all duration-300 group-hover:rotate-0"></div>
        
        {/* Image container */}
        <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto overflow-hidden rounded-full border-4 border-white shadow-lg transform transition duration-300 group-hover:scale-105">
        <Image  src={img}                             alt="Rashida"  
           
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>

      <div className="lg:w-1/2 text-center lg:text-left space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          I'M <span className="text-yellow-400">Rashida Mahroof.</span>
        </h1>
        
        <div className="h-8 text-xl md:text-2xl font-medium text-gray-700">
          {/* Typewriter component would go here */}
          Web & Mobile App Developer
        </div>

        <p className="max-w-md mx-auto lg:mx-0 text-sm md:text-base text-gray-600">
          Passionate about crafting seamless digital experiences. Specializing in full-stack web development and cross-platform mobile applications.
        </p>

        <button 
          onClick={() => scrollToSection('about')}
          className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition duration-300 uppercase tracking-wider text-sm md:text-base shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
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