"use client"
import { useState } from 'react';
import MainTitle from '../title/page';
import Image from 'next/image';
const items = [
  { id: 1, category: 'Web Design', src: '/portfolio/webdesigns/Untitled.png' },
  { id: 1, category: 'Logo', src: '/portfolio/logos/logo.png' },
  { id: 2, category: 'Video', src: '/path/to/image2.jpg' },
  { id: 3, category: 'Graphic Design', src: '/path/to/image3.jpg' },
  { id: 4, category: 'Mockup', src: '/path/to/image4.jpg' },
  { id: 5, category: 'Logo', src: '/path/to/image5.jpg' },
  { id: 6, category: 'Video', src: '/path/to/image6.jpg' },
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
      <div className="grid grid-cols-3 gap-4">
        {filteredItems.map(item => (
          <div key={item.id} className="bg-white p-4 rounded">
            <img src={item.src} alt={item.category} width={0} height={0} className="object-cover w-full h-50 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
