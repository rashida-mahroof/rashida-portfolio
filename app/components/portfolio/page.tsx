"use client"
import { useState } from 'react';
import MainTitle from '../title/page';
import Image from 'next/image';
import Link from 'next/link';
import graphicDesign1 from '../../../public/portfolio/graphicdesigns/1.png';
import graphicDesign2 from '../../../public/portfolio/graphicdesigns/2.jpg';
import graphicDesign3 from '../../../public/portfolio/graphicdesigns/3.jpg';
import graphicDesign4 from '../../../public/portfolio/graphicdesigns/4.jpg';
import graphicDesign5 from '../../../public/portfolio/graphicdesigns/5.jpg';
import graphicDesign6 from '../../../public/portfolio/graphicdesigns/6.png';
import graphicDesign7 from '../../../public/portfolio/graphicdesigns/7.png';
import graphicDesign8 from '../../../public/portfolio/graphicdesigns/8.jpg';
import webDesign1 from '../../../public/portfolio/webdesigns/11.png';
import webDesign2 from '../../../public/portfolio/webdesigns/33.png';
import webDesign3 from '../../../public/portfolio/webdesigns/22.png';
import webDesign4 from '../../../public/portfolio/webdesigns/44.png';
import webDesign5 from '../../../public/portfolio/webdesigns/55.png';
import mobileApp1 from '../../../public/portfolio/mobileapps/2.png';
import mobileApp2 from '../../../public/portfolio/mobileapps/3.png';
import mobileApp3 from '../../../public/portfolio/mobileapps/4.png';
import mobileApp4 from '../../../public/portfolio/mobileapps/5.png';
// import webDesignUntitled from '../../../public/portfolio/webdesigns/Untitled.png';
import logo1 from '../../../public/portfolio/logos/1.png';
import logo2 from '../../../public/portfolio/logos/2.png';
import logo3 from '../../../public/portfolio/logos/Logo.png';

const items = [
  
  { id: 20, category: 'Mobile Apps', src: mobileApp2, link: '' },
  { id: 21, category: 'Mobile Apps', src: mobileApp3, link: '' },
  { id: 22, category: 'Mobile Apps', src: mobileApp4, link: '' },
  { id: 9, category: 'Websites', src: webDesign1, link: 'http://www.hokybo.com' },
  { id: 10, category: 'Websites', src: webDesign2, link: 'https://rashida-mahroof.github.io/business-solutions/' },
  { id: 11, category: 'Websites', src: webDesign3, link: 'https://rashida-mahroof.github.io/charcoal/' },
  { id: 12, category: 'Websites', src: webDesign4, link: 'https://rashida-mahroof.github.io/oscarevents/' },
  { id: 13, category: 'Websites', src: webDesign5, link: 'https://madariz.org/' },
  { id: 19, category: 'Mobile Apps', src: mobileApp1, link: '' },
  { id: 1, category: 'Graphic Design', src: graphicDesign1, link: '' },
  { id: 2, category: 'Graphic Design', src: graphicDesign2, link: '' },
  { id: 3, category: 'Graphic Design', src: graphicDesign3, link: '' },
  { id: 4, category: 'Graphic Design', src: graphicDesign4, link: '' },
  { id: 5, category: 'Graphic Design', src: graphicDesign5, link: '' },
  { id: 6, category: 'Graphic Design', src: graphicDesign6, link: '' },
  { id: 7, category: 'Graphic Design', src: graphicDesign7, link: '' },
  { id: 8, category: 'Graphic Design', src: graphicDesign8, link: '' },

  // { id: 14, category: 'Mobile Apps', src: mobileApp1, link: '' },
  // { id: 15, category: 'Web Design', src: webDesignUntitled, link: '' },
  { id: 16, category: 'Logo', src: logo1, link: '' },
  { id: 17, category: 'Logo', src: logo2, link: '' },
  { id: 18, category: 'Logo', src: logo3, link: '' },

  // { id: 1, category: 'Mobile Apps', src: mobileApp5, link: '' },
];


const categories = [ 'All','Mobile Apps', 'Websites', 'Graphic Design', 'Logo',];

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
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 animate-on-scroll" data-animation="animate-slideUp">
        {filteredItems.map(item => (
          <Link key={item.id} href={item.link} target='_blank'>
            <div  className="bg-white p-2 rounded h-60 overflow-hidden transform transition-all  duration-300  ">
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
