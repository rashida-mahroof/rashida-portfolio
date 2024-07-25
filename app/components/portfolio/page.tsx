"use client"
import { useState } from 'react';
import MainTitle from '../title/page';
import Image from 'next/image';
import Link from 'next/link';
const items = [
  
  { id: 3, category: 'Graphic Design', src: '/portfolio/graphicdesigns/1.png' , link:''},
  { id: 3, category: 'Graphic Design', src: '/portfolio/graphicdesigns/2.jpg' , link:''},
  { id: 3, category: 'Graphic Design', src: '/portfolio/graphicdesigns/3.jpg' , link:''},
  { id: 3, category: 'Graphic Design', src: '/portfolio/graphicdesigns/4.jpg' , link:''},
  { id: 3, category: 'Graphic Design', src: '/portfolio/graphicdesigns/5.jpg' , link:''},
  { id: 3, category: 'Graphic Design', src: '/portfolio/graphicdesigns/6.png' , link:''},
  { id: 3, category: 'Graphic Design', src: '/portfolio/graphicdesigns/7.png' , link:''},
  { id: 3, category: 'Graphic Design', src: '/portfolio/graphicdesigns/8.jpg' , link:''},
  { id: 3, category: 'Websites', src: '/portfolio/webdesigns/1.png' , link:'/www.hokybo.com'},
  { id: 3, category: 'Websites', src: '/portfolio/webdesigns/2.png' , link:''},
  { id: 3, category: 'Websites', src: '/portfolio/webdesigns/3.png' , link:''},
  { id: 3, category: 'Websites', src: '/portfolio/webdesigns/4.png' , link:''},
  { id: 3, category: 'Websites', src: '/portfolio/webdesigns/5.png' , link:'/https://madariz.org/'},
  { id: 3, category: 'Mobile Apps', src: '/portfolio/mobileapps/1.png' , link:''},
  { id: 1, category: 'Web Design', src: '/portfolio/webdesigns/Untitled.png' , link:''},
  { id: 1, category: 'Logo', src: '/portfolio/logos/1.png' , link:''},
  { id: 1, category: 'Logo', src: '/portfolio/logos/2.png' , link:''},
  { id: 1, category: 'Logo', src: '/portfolio/logos/logo.png' , link:''},


];

const categories = ['All', 'Logo', 'Web Design', 'Graphic Design', 'Mobile Apps', 'Websites'];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All' ? items : items.filter(item => item.category === selectedCategory);

  return (
    <div id='portfolio' className=" text-white min-h-screen p-10">
      <MainTitle title="My portfolio" subtitle="Works" />
      <div className="flex space-x-4 mb-6 flex-wrap items-center justify-center">
        {categories.map(category => (
          <button
            key={category}
            className={`px-4 py-2 rounded my-1 ${selectedCategory === category ? 'bg-yellow-400 text-black' : 'bg-gray-700'}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        {filteredItems.map(item => (
          <Link href={item.link} target='_blank'>
            <div key={item.id} className="bg-white p-2 rounded h-60 overflow-hidden transform transition-all  duration-300  ">
            <Image
              src={item.src}
              alt={item.category}
              width={400}
              height={300}
              className={`${item.category === 'Websites' ? 'object-cover' : 'object-contain'} w-full h-full rounded transition-transform duration-300 hover:scale-110`}
            />
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
